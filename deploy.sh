cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:DeFUCC/defucc.me.git head:gh-pages

cd -