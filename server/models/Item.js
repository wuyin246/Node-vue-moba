// 定义mongodb模板 分类模板
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
});

module.exports = mongoose.model('Item', schema);