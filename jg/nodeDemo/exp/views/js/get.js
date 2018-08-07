var express = require('express');
var app = express();

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "name": req.query.name,
        "age": req.query.age
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(3000, () => {

    console.log('http://127.0.0.1:3000')

})