## Relações

- ManyToMany
- UM _usuário_ pode ter VÁRIOS _jogos_
- UM _jogo_ pode estar associado a VÁRIOS _usuários_.

## Game repository:

[x] findByTitleContaining -> Traz titulo ignorando o case sensitivity

[x] countAllGames -> Traz quantos games existem

[] findUsersByGameId -> Traz usuários que tem aquele game

## User repository:

[] findUserWithGamesById -> User id e seus games

[x] findAllUsersOrderedByFirstName -> Traz todos os usuários ordenados pelo primeiro nome

[x] findUserByFullName -> Traz usuário pelo nome todo, ignorando o case sensitivity
