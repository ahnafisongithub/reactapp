const http = require('http')

const hostname = '127.0.0.1';

const port = 3000;



const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello World! NodeJS \n');

});



server.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);

});

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}