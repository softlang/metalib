i = -i.:./lib/Haskell
ghci = ghci Main.hs ${i}

fsml:
	ghci ${i} FsmlAcceptor.hs

accept:
	ghci ${i} Main.hs

compile:
	ghc ${i} Main.hs -o ./tmp/FsmlAcceptor.run

test:
	@echo main | ${ghci}

clean:
	rm -f ./*.hi ./*.o ./tmp/FsmlAcceptor.run

run:
	${ghci}
