cd metalib-release

shopt -s dotglob

mv -f ../metalib-build/* ./
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"

cd docs

git add resources/public/*.html
git add index.html
git add js/app.js
git add css/style.css

git add *.html
git commit -a -m "[docs] automated concourse build"
