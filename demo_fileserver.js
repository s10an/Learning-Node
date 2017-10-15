var http = require('http');
var fs = require('fs');

http.createServer(function(req,res) {
  fs.readFile('./demo_readfile.html', function(err, data){
      res.writeHead(200, {'Content-Type': 'text/hrml'});
      res.write(data);
      res.end();
  });  
}).listen(8080);