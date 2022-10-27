# Desafio - Corrigindo o código

## Requisitos

- **id** deve ser um uuid válido;
- **title** é o título do repositório (por exemplo "unform");
- **url** é a URL que aponta para o repositório (por exemplo "[https://github.com/unform/unform](https://github.com/unform/unform)");
- **techs** é um array onde cada elemento deve ser uma string com o nome de uma tecnologia relacionada ao repositório (por exemplo: ["react", "react-native", "form"]);
- **likes** é a quantidade de likes que o repositório recebeu (e que vai ser incrementada de 1 em 1 a cada chamada na rota de likes).

## Testes

- [x] Should be able to create a new repository;
- [x] Should be able to list the projects;
- [x] Should be able to update repository;
- [x] Should not be able to update a non existing repository;
- [x] Should not be able to update repository likes manually;
- [x] Should be able to delete the repository;
- [x] Should not be able to delete a non existing repository;
- [x] Should be able to give a like to the repository;
- [x] Should not be able to give a like to a non existing repository
