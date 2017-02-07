module main::rascal::org::softlang::fsml::ConcreteSyntax

extend lang::std::Layout;

start syntax Fsm = @Foldabel fsm: State* states;
syntax State = @Foldable state: "initial"? "state" Id id "{" Transition* transitions "}"; 
syntax Transition = transition: Event event ("/" Action action)? ("-\>" Id id)? ";";

syntax Id = Name;
syntax Event = Name;
syntax Action = Name;
lexical Name = ([a-zA-Z][a-zA-Z0-9]* !>> [a-zA-Z0-9]);
