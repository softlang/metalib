metadocs:
	cd tools/metadocs && boot prod
	rm -rf docs
	mkdir docs
	cp -R tools/metadocs/target/public/* docs
	rm -rf docs/js/app.out docs/js/app.cljs.edn docs/css/*.scss
