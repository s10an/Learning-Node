var http = require('http');
var fs = require('fs');
var url = require('url');
var formidable = require('formidable');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname;
    switch(filename) {
        case '/uploadfile':
            console.log('upload file');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<form action="fileuploading" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');
            return res.end();
            break;
        case '/fileuploading':
            console.log('file uploading');
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
                res.write('File uploaded');
                res.end();
              });
              break;
        default:
            console.log('unknown site');
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
            break;
    }
}).listen(8080);