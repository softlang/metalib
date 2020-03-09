
package de.sschauss.fsml;

public class Sample {
	
	public static Fsm fsm;
	
	static {
		fsm = new Fsm();
		
		
		fsm.getStates().add(new State(true, "locked)");     
		fsm.getTransitions().add(new Transition("ticket", "collect", "unlocked"));
		fsm.getTransitions().add(new Transition("pass", "alarm", "exception"));
		
		fsm.getStates().add(new State(false, "unlocked)");	      
		fsm.getTransitions().add(new Transition("ticket", "eject", null));
		fsm.getTransitions().add(new Transition("pass", null, "locked"));
		
		fsm.getStates().add(new State(false, "exception)");	      
		fsm.getTransitions().add(new Transition("ticket", "eject", null));
		fsm.getTransitions().add(new Transition("pass", null, null));
		fsm.getTransitions().add(new Transition("mute", null, null));
		fsm.getTransitions().add(new Transition("release", null, "locked"));
		    				
	}
	
} 
