var sys = require('sys'),
    http = require('http'),
    argv = require('optimist').argv;

var port = argv.p || argv.port || 80;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(port);

/* server started */  
sys.puts('> hello world running on port ' + port);