// 连接数据库
module.exports = (app) => {
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // 在这里用require-all插件，先把所有后面需要引用的资源引用一遍，防止出错
  require('require-all')(__dirname + '/../models');
};
