cd metalib/docs
boot build
mkdir -p css
mkdir -p js
mv target/public/*.html .
mv target/public/js/app.js js
mv target/public/css/style.css css
cp -r .. ../../metalib-build

