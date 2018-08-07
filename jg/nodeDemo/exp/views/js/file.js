var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer().array('image'));


// app.post('/file_upload', function (req, res) {

//     console.log(req.files[0]); // 上传的文件信息

//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.writeHead(200, {
//                     'Content-Type': 'text/html;charset=utf-8'
//                 }); //设置response编码为utf-8
//                 response = {
//                     message: '图片',
//                     filename: req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// })

//保存base64图片POST方法
app.post('/upload', function (req, res) {
    //接收前台POST过来的base64
    //console.log(res)
    var imgData = req.body.image;
    //过滤data:URL
    var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, 'base64');
    //保存路径加随机数
    var des_file = "C:\\Users\\Administrator\\Desktop\\node\\exp\\public\\images\\" + Math.random().toString(36).substr(2) + '.jpg';
    //console.log(des_file,'路径')
    fs.writeFile(des_file, dataBuffer, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            }); //设置response编码为utf-8
            response = {
                message: '图片',
                filename: des_file.replace(/C:\\Users\\Administrator\\Desktop\\node\\exp\\public\\images\\/, '')
            };
        }
        console.log(response);
        res.end(JSON.stringify(response));
    });
});



app.listen(3000, () => {

    console.log('http://127.0.0.1:3000')

})