var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000/images/logo.png')
})