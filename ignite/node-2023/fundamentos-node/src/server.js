import http from 'node:http';
import { json } from './middlewares/json.js';

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  // console.log(method, url);

  await json(req, res);

  // early return
  if (method === 'GET' && url === '/users') {
    // deixando sem header, ele fica em formato de string
    return res
    .end(JSON.stringify(users));
    // return res.end('listagem');
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body;

    users.push({
      id: 1,
      name,
      email
    });

    return res.writeHead(201).end();
    // return res.end('criação');
  }
  
  return res.writeHead(404).end();
});

server.listen(3333);
