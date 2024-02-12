# RESTful API de Usuários

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

API desenvolvida em Node.js com express para o Curso Completo de JavaScript na Udemy.com.

### Instalação
```
npm install
```

### Excutando servidor
```
npm start
```
## Rotas
Obter todos os usuários:
```
GET /users
```
Exemplo de resultado:
```json
{
    "users":[]
}
```

Cadastrar um novo usuário:
```
POST /users
```
Exemplo de resultado:
```json
{
    "_id":"hjkhfui324",
    "name":"Nome Sobrenome"
}
```

Obter dados de um usuário:
```
GET /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"hjkhfui324",
    "name":"Nome Sobrenome"
}
```

Editar um usuário:
```
PUT /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"hjkhfui324"
}
```

Excluir um usuário:
```
DELETE /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"hjkhfui324"
}
```
