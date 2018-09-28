var http = require('http');
var fs = require('fs');
const app = require('./script');
 
var server = http.createServer(function (req, res) {
 
    if (req.url === "/") {
        fs.readFile("index.html", 'utf8', function (error, pgResp) {
            if (error) {
                res.writeHead(404);
                res.write('Página no encontrada');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html' });
                res.write(pgResp);
            }
        res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Contenido por defecto</h1>');
        res.end();
    }
});
 
server.listen(process.env.PORT || 3000);
 
console.log('El servidor está escuchando en el puerto 5000');