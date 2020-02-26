const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is PRODUCT");
  } else if (pathName === '/api'){
      console.log('api')
  } else {
      res.writeHead(404, {
          'Content-type': 'text/html',
          'my-own-header': 'hello-world'
      });

      res.end('<h1>Page not Found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
  });
  
