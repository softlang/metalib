#Dependencies

- (Racket)[https://racket-lang.org/]

#Build
Use the Makefile to build the binaries and run the tests.
Or cd to the source dir and run
- `raco pkg remove fsml` if a previous version of the fsml library is installed
- `cd fsml && raco pkg install`
- `raco test fsml/main.rkt`
