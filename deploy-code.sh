git checkout --orphan gh-pages

git reset --hard

git checkout main -- dist

mv dist/* .
rmdir dist

git add .
git commit -m "Deploy dist to gh-pages"
git push -f origin gh-pages

git checkout main
