#lang racket
(require fsml/fsml)

(fsml turnstile-fsm
 (initial state locked {
                       (ticket / collect -> unlocked)
                       (pass / alarm -> exception)
                       })
 (state unlocked {
                 (ticket / eject)
                 (pass -> locked)
                 })
 (state exception {
                  (ticket / eject)
                  (pass)
                  (mute)
                  (release -> locked)
                  }))



(print (run turnstile-fsm
     'ticket
     'ticket
     'pass
     'pass
     'mute
     'release))