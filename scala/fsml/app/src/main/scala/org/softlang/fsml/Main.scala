package org.softlang.fsml

object Main extends App {

  @Fsm
  object TurnstileFsm {
    initial state locked {
      ticket / collect -> unlocked;
      pass / alarm -> exception;
    }

    state unlocked {
      ticket / eject;
      pass -> locked;
    }

    state exception {
      ticket / eject;
      pass;
      mute;
      release -> locked;
    }
  }

  TurnstileFsm.run.ticket.ticket.pass.pass.ticket.mute.release
}
