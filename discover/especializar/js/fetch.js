// buscar, pegar...
fetch('https://api.github.com/users/guisofiati')
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(res => res.json())
.then(reposData => console.log(reposData))
.catch(erro => console.log(erro))