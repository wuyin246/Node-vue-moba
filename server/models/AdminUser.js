// 定义mongodb模板 分类模板
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(val) {
      // bcrypt 进行密码加密
      return require('bcrypt').hashSync(val, 10)
    },
  },
  limitslist: Array,
})

module.exports = mongoose.model('AdminUser', schema)
