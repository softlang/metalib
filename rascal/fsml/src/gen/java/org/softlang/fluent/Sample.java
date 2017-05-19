package org.softlang.fluent;

import static org.softlang.fluent.FsmlImpl.fsm;

public class Sample {
	
	public static final Fsml SAMPLE =
		fsm()
			.state("locked")
				.transition("ticket", "collect", "unlocked")
				.transition("pass", "alarm", "exception")
			.state("unlocked")
				.transition("ticket", "action", null)
				.transition("pass", null, "locked")
			.state("exception")
				.transition("ticket", "action", null)
				.transition("pass", null, null)
				.transition("mute", null, null)
				.transition("release", null, "locked");
}
	