cd metalib-release

shopt -s dotglob

mv -f ../metalib-build/* ./
git config --global user.email "${GIT_EMAIL}"
git config --global user.name "${GIT_NAME}"

cd docs

git add index.html
git add js/app.js
git add css/style.css

git commit -a -m "doc update"
