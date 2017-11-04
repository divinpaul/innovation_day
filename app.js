var express = require('express');  
var app     = express();

app.get('/', function (req, res) {
  debugger
  console.log('new requesy !!!!')
  res.json('Hello Sales and billing');
})

var server = app.listen(8080, function () {  
   var address = server.address()
   console.log("Innovation day app listening at http://%s:%s", address.address, address.port)
});