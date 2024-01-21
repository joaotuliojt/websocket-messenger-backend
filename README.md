# WebSocket Messenger - Backend

Este é o repositório do backend para o projeto WebSocket Messenger. O backend é construído em Node.js, utilizando Socket.io para comunicação em tempo real e PostgreSQL para armazenamento de dados.

## Tecnologias Utilizadas

- Node.js
- Socket.io
- PostgreSQL
- Supabase
- Typescript

## Configuração e Execução

1. Clone este repositório:

   ```bash
   git clone https://github.com/joaotuliojt/websocket-messenger-backend.git
   ```

2. Instale as dependências:

   ```bash
   cd websocket-messenger-backend
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` com as informações do seu banco de dados PostgreSQL.

```
DATABASE_URL=(SUA CONEXÃO COM O BANCO DE DADOS)
```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

5. O servidor estará em execução em [http://localhost:3333](http://localhost:3333).

## Contribuindo

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Abra uma issue para discussões ou envie uma pull request.
