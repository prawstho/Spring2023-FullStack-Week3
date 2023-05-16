const http = require('http');
var fs = require('fs');

const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url);
  switch(request.url) {
      case '/':
          // console.log('top of the localhost:3000 web site')
          path += "index.html";
          //console.log(`the path is ${path}`);
          fs.readFile(path, function(err, data) {
              if(err) {
                  console.log(err);
                  response.end();
              } else {
                  console.log('file was served.')
                  response.writeHead(response.statusCode, {'Content-Type': 'text/html'});
                  response.write(data);
                  response.end();
              }   
          });
          break;
      case '/test':
          path += "test.html"
          fs.readFile(path, function(err, data) {
              if(err) {
                  console.log(err);
                  response.end();
              } else {
                  console.log('test.html was read');
                  response.writeHead(response.statusCode, {'Content-Type': 'text/html'})
                  response.write(data);
                  response.end();
              }
          })
          break;
      default:
          console.log('every missing route')
          response.setHeader('Content_Type', 'text/plain');
          response.write('Every missing route!');
          response.end();
          break;
  }
});

server.listen(3000, 'localhost', () => {
  console.log('listening on port 3000.')
});