module.exports = options => {
  const jwt = require("jsonwebtoken");

  const assert = require("http-assert");

  const AdminUser = require("../models/AdminUser");
  return async (req, res, next) => {
    // 添加中间件处理token判断用户是否登录
    // 前端传来的token 为 (Bearer空格+token),先用split(' ')按空格分割字符串再pop()取数组最后的元素。
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    // 校验前端传来的token :app.get('secret') 是我们规定的全局的密钥
    assert(token, 401, "请提供jwt token");
    const { id } = jwt.verify(token, req.app.get("secret"));
    assert(id, 401, "无效的jwt token");

    req.user = await AdminUser.findById(id);
    assert(req.user, 401, "请先登录");
    await next();
  };
};
