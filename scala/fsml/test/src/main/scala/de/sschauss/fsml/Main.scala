package de.sschauss.fsml

import de.sschauss.fsml.macros.Fsm

object Main extends App {

  @Fsm
  object TurnstileFsm {
    initial state locked {
      ticket / collect -> unlocked;
      pass / alarm -> exception;
    }

    state unlocked {
      ticket / action;
      pass -> locked;
    }

    state exception {
      ticket / action;
      pass;
      mute;
      release -> locked;
    }
  }

  TurnstileFsm().ticket.ticket.pass.pass.ticket.mute.release

}
