#lang racket
(provide
 fsml
 initial
 state
 run)

(require
  syntax/stx
  (for-syntax
   racket/contract
   racket/list
   racket/set
   syntax/stx))

(struct fsm-struct (states))
(struct state-struct (initial id transitions))
(struct transition-struct (input action target))

(begin-for-syntax
  (define-syntax-rule (id->string id)
    (datum->syntax #'id (symbol->string (syntax->datum #'id))))
  
  (define (state->id stx)
    (syntax-case stx (initial state)
      [(initial state id { transition ... })
       #'id]
      [(state id { transition ... })
       #'id]))
  
  (define (stx->transition-struct stx)
    (syntax-case stx (/ ->)
      [(input)
       (with-syntax ([input-string (id->string input)])
         #'(transition-struct input-string #f #f))]
      [(input / action)
       (with-syntax ([input-string (id->string input)]
                     [action-string (id->string action)])
         #'(transition-struct input-string action-string #f))]
      [(input -> target)
       (with-syntax ([input-string (id->string input)])
         #'(transition-struct input-string #f (λ () target)))]
      [(input / action -> target)
       (with-syntax ([input-string (id->string input)]
                     [action-string (id->string action)])
         #'(transition-struct input-string action-string (λ () target)))]))
  
  (define stx->define-state-struct
    (λ (stx [initial? #f])
      (syntax-case stx ()
        [(_ id { transition-stx ... })
         (with-syntax ([id-string (id->string id)]
                       [initial? initial?]
                       [(transition ...) (stx-map stx->transition-struct #'(transition-stx ...))])
           #'(define id (state-struct initial? id-string (list transition ...))))])))
  
  (define (check-fsml stx)
    (for-each (λ (check) (check stx))
              (list check-fsml-single-initial
                    check-fsml-determinism
                    check-fsml-reachable)))
  
  (define (check-fsml-single-initial stx)
    (let ([initial-states (stx->initial-states stx)])
        (case (length initial-states)
          [(0) (raise-syntax-error 'constraint-error
                                   "no initial state defined"
                                   stx)]
          [(1) (void)]
          [else (raise-syntax-error 'constraint-error
                                   "initial state already defined"
                                   (second initial-states))])))
  
  (define (check-fsml-determinism stx)
    (for-each (λ (state)
                (let [(duplicate (check-duplicate-identifier
                                  (map (λ (transition)
                                         (syntax-case transition ()
                                           [(input . _) #'input]))
                                       (stx->transitions state))))]
                  (when (identifier? duplicate)
                    (raise-syntax-error 'constraint-error
                                        "input already defined in state"
                                        duplicate))))
              (stx->states stx)))
  
  (define (check-fsml-reachable stx)
    (let check-fsml-reachable ([visited '()] [to-visit (stx->initial-states stx)] [states (stx->states stx)])
      (case (set-count to-visit)
        [(0)
         (for-each
              (λ (state)
                (raise-syntax-error 'constraint-error
                                    "unreachable state"
                                    state))
              (reverse (set-subtract states visited)))]
        [else
         (let ([visited (set-add visited (set-first to-visit))])
         (check-fsml-reachable
          visited
          (set-subtract (set-union (flatten (map (λ (x)
                                 (syntax-case x (->)
                                   [(rest ... -> target)
                                    (filter (λ (state)
                                              (bound-identifier=? (state->id state) #'target))
                                            states)]
                                   [else '()]))
                               (stx->transitions (set-first to-visit)))) to-visit) visited)
          states))])))      
  
  (define (stx->transitions stx)
    (syntax->list (syntax-case stx (initial state)
      [(initial state _ { transition ... })
       #'(transition ...)]
      [(state _ { transition ... })
       #'(transition ...)])))
      
  (define (stx->states stx)
    (syntax-case stx ()
      [(id _ state ...)
       (syntax->list #'(state ...))]))
  
  (define (stx->initial-states stx)
       (filter (λ (stx) (syntax-case stx (initial state)
                          [(initial . rest) #t]
                          [(state . rest) #f])) (stx->states stx))))

(define-syntax (fsml stx)
  (syntax-case stx ()
    [(_ name state ...)
     (with-syntax ([(state-ids ...) (stx-map state->id #'(state ...))])
     (check-fsml stx)
     #'(begin state ... (define name (fsm-struct (list state-ids ...)))))]))

(define-syntax (initial stx)
  (syntax-case stx ()
    [(_ . rest)
     (with-syntax ([state (stx->define-state-struct #'rest #t)])
       #'state)]))

(define-syntax (state stx)
  (stx->define-state-struct stx))


(define (run fsm-struct . inputs)
  (let run ([state (first (filter state-struct-initial (fsm-struct-states fsm-struct)))]
            [inputs inputs]
            [actions '()])
    (match (length inputs)
      [0 actions]
      [_ (let* ([transition (first (filter (lambda (transition) (eq? (string->symbol (transition-struct-input transition)) (first inputs))) (state-struct-transitions state)))]
                [target (transition-struct-target transition)]
                [action (transition-struct-action transition)])
           (run (if target (target) state)
                (list-tail inputs 1)
                (if action `(,@actions ,action) actions)))])))