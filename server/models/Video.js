// 定义mongodb模板 视频模板
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type: String },
    previewimg: { type: String },
    videourl: { type: String },
    playnum: { type: Number },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
}, {
    timestamps: true
});

module.exports = mongoose.model('Video', schema);