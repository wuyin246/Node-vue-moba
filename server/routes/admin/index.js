// 数据库路由模块
module.exports = (app) => {
  const express = require('express')

  const jwt = require('jsonwebtoken')

  const assert = require('http-assert')

  const AdminUser = require('../../models/AdminUser')
  // 导入父级参数到子级配置
  const router = express.Router({
    mergeParams: true,
  })

  // 新建(修改)资源接口
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除资源接口
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true,
    })
  })

  // 获取资源列表接口
  router.get('/', async (req, res) => {
    // 此处判断这个资源如果是Category,那么我们就把关联'parent'的键关联的具体值查出来
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(1000)

    res.send(items)
  })

  // 获取资源详情页接口
  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id)
    res.send(item)
  })

  // 登录校验中间件
  const authMiddleware = require('../../middleware/auth')

  // 资源处理中间件：
  // 此处定义中间件封装下面操作
  // 导入inflection第三方包，转换categories => Category
  const resourceMiddleware = require('../../middleware/resource')

  // 挂载通用CRUD接口
  app.use(
    '/admin/api/rest/:resource',
    authMiddleware(),
    resourceMiddleware(),
    router
  )

  // 导入multer
  const multer = require('multer')
  // 定义文件上传中间件，并定义输出路径
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post(
    '/admin/api/upload',
    upload.single('file'),
    authMiddleware(),
    async (req, res) => {
      // express并不具有获取上传文件能力的，所以要通过 multer 中间件来进行操作
      // upload.single('file')方法会把上传的文件对象挂载到 客户端发来的req请求上
      const file = req.file
      file.url = `http://localhost:3000/uploads/${file.filename}`
      res.send(file)
    }
  )

  // 登录接口
  app.post('/admin/api/login', async (req, res) => {
    // 解构赋值
    const { username, password } = req.body
    // 1. 根据用户名找用户

    // 之前model/AdminUser.js中设置了password无法被取出，所以在下面查询时要把它取出来，加上.select('+password')
    const user = await AdminUser.findOne({ username: username }).select(
      '+password'
    )
    assert(user, 422, '用户不存在')

    // 2. 校验密码
    const isExist = require('bcrypt').compareSync(password, user.password)
    assert(isExist, 422, '密码错误')

    // 3. 返回客户端token
    // 安装 jsonwebtoken
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({
      token: token,
      username: user.username,
      userid: user._id,
      limitslist: user.limitslist,
    })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    })
  })
}
