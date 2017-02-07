module main::rascal::org::softlang::fsml::Util

import List;

public list[&T] getDuplicates(list[&T] l) =
	l - dup(l);
