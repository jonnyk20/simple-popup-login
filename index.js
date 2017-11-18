var express = require("express"),
app = express(),
PORT = 3000

app.use(express.static(__dirname + '/public'))

app.listen(PORT);
console.log('listening on:', PORT)