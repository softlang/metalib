#Dependencies

- (Glasgow Haskell Compiler)[https://www.haskell.org/downloads]
- (Cabal)[https://www.haskell.org/cabal/]

#Build

Use the Makefile to build the binaries.
Or cd to the source dir and run
- `cabal sandbox init` 
- `cabal install --enable-tests`
- `cabal test`
- `cabal run`
