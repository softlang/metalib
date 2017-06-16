cd metalib/tools/metadocs
boot prod
ls
cd ../..
rm -rf docs
mv tools/metadocs/target/public docs
rm -r docs/css/*.scss
rm docs/js/app.cljs.edn
rm -r docs/js/app.out
cp -r . ../metalib-build
