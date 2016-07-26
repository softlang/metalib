#lang racket
(require 
    fsml/fsml
    racket
    rackunit)

(define-namespace-anchor fsml-tests)
(define fsml-tests-ns (namespace-anchor->namespace fsml-tests))
(define (syntax-error? quoted-syntax)
  (with-handlers ([exn:fail:syntax?
                   (lambda (e) (exn-message e))]
                  [exn:fail?
                   (lambda (_) #f)])
    (eval `(begin ,quoted-syntax #f) fsml-tests-ns)))


(test-case
 "determinism constraint"
 (check-regexp-match
  "input already defined in state"
  (syntax-error? '(fsml determinism-not-ok
                        (initial state stateA {
                                               (eventI / actionI -> stateB)
                                               (eventI / actionII -> stateC)
                                               })
                        (state B { })
                        (state C { })))))

(test-case
 "single initial constraint"
 (check-regexp-match
  "no initial state defined"
  (syntax-error? '(fsml initial-state-not-ok
                        (state stateA {
                                       (eventI / actionI -> stateB)
                                       })
                        (state B {
                                  (eventII / actionII -> stateA)
                                  }))))
 
 (check-regexp-match
  "initial state already defined"
  (syntax-error? '(fsml initial-state-not-ok
                        (initial state stateA {
                                               (eventI / actionI -> stateB)
                                               })
                        (initial state B {
                                          (eventI / actionII -> stateC)
                                          })
                        (state C { })))))

(test-case
 "reachable state constraint"
 (check-regexp-match
  "unreachable state"
  (syntax-error? '(fsml reachable-state-not-ok
                        (initial state stateA {
                                               (eventI / actionI -> stateB)
                                               })
                        (state B { })
                        (state C { })))))
