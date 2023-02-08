import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log(method, url);

  // early return
  if (method === 'GET' && url === '/users') {
    // deixando sem header, ele fica em formato de string
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users));
    // return res.end('listagem');
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John',
      email: "john@example.com",
    });

    return res.writeHead(201).end();
    // return res.end('criação');
  }
  
  return res.writeHead(404).end();
});

server.listen(3333);
