var mysql = require('mysql');
const Koa = require('koa');
const app = new Koa();
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo'
});
connection.connect();

// var  addSql = 'INSERT INTO text(id,name,age) VALUES(0,?,?)';
// var  addSqlParams = ['lyh','18'];
// //增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }        

//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });

// var delSql = 'DELETE FROM text where id=5';
// //删
// connection.query(delSql, function (err, result) {
//     if (err) {
//         console.log('[DELETE ERROR] -', er.message);
//         return;
//     }
//     console.log('--------------------------DELETE----------------------------');
//     console.log('DELETE affectedRows', result.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// })


// var modSql = 'UPDATE text SET name = ?,age = ? WHERE Id =6 ';
// var modSqlParams = ['zzz', '1995'];
// //改
// connection.query(modSql, modSqlParams, function (err, result) {
//     if (err) {
//         console.log('[UPDATE ERROR] - ', err.message);
//         return;
//     }
//     console.log('--------------------------UPDATE----------------------------');
//     console.log('UPDATE affectedRows', result.affectedRows);
//     console.log('-----------------------------------------------------------------\n\n');
// });


var sql = 'SELECT * FROM text';
//查
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    app.use(async (ctx) => {
        ctx.body = result
    })
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});


connection.end();
app.listen(8888,()=>{
    console.log('http://127.0.0.1:8888')
})