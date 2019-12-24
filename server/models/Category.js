// 定义mongodb模板 分类模板
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String },
    // 上级分类类型是mongoose.SchemaTypes.ObjectId，关联的是这个模型本身
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' },
});

schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})

schema.virtual('newsList', {
    localField: '_id',
    foreignField: 'categories',
    justOne: false,
    ref: 'Article'
})

module.exports = mongoose.model('Category', schema);