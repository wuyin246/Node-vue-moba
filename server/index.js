const express = require('express');

const app = express();

app.set('secret', 'wy2463371514');

// 配置跨域中间件
app.use(require('cors')());

// 配置中间件获取post请求的req.body
app.use(express.json());

// 开放uploads静态资源文件夹
// 用户可以通过 /uploads 来访问这个文件夹
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/', express.static(__dirname + '/web'));



require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log("http://localhost:3000");
})