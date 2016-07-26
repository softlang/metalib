module main::rascal::de::sschauss::fsml::Util

import List;

public list[&T] getDuplicates(list[&T] l) =
	l - dup(l);