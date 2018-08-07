var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var Parser = bodyParser.urlencoded({
    extended: false
})

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo',
});

connection.connect();


var sql = 'SELECT * FROM text';
//查
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

//增
app.post('/process_post', Parser, function (req, res) {
    var response = {
        'id': req.body.id,
        'name': req.body.name,
        'age': req.body.age
    }
    console.log(response)
    var addSql = 'INSERT INTO text(id,name,age) VALUES(0,?,?)';
    var addSqlParams = [response.name, response.age];
    //增
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }

        // console.log('--------------------------INSERT----------------------------');
        // //console.log('INSERT ID:',result.insertId);        
        // console.log('INSERT ID:', result);
        // console.log('-----------------------------------------------------------------\n\n');
    });
    res.end(JSON.stringify(response));
    // connection.end();
})


app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})