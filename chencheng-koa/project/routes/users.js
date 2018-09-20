const router = require('koa-router')()
const monk = require('monk');
const db = monk('localhost:27017/blog'); // mongodb 链接
// const id = monk.id('4ee0fd75d6bd52107c000118')

router.prefix('/user')

router.get('/', async (ctx, next) => { // 获取用户列表
  let queryParams = {
  }
  if(ctx.request.query && ctx.request.query.keyword) {
    queryParams.userName = new RegExp(`${decodeURI(ctx.request.query.userName)}`);
  }
  await db.get('user').find(queryParams).then(docs => {
    ctx.response.body = {
      result: {contentList: docs}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})

router.get('/detail', async (ctx, next) => { // 用户详细
  let queryParams = {
  }
  if(ctx.request.query && ctx.request.query._id) {
    queryParams._id = ctx.request.query._id;
  } else {
    return;
  }
  await db.get('user').findOne({'_id': queryParams._id}).then(docs => {
    ctx.response.body = {
      result: {data: docs}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})

router.post('/signup', async (ctx, next) => { // 添加用户
  ctx.request.body && await db.get('user').insert([
    {
      userName: ctx.request.body.userName,
      password: ctx.request.body.password
    }
  ]).then(res => {
    ctx.response.body = {
      result: {code: 'success', msg: '注册成功', cb: res}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '注册失败', cb: e}
    }
  });
})
router.post('/signin', async (ctx, next) => { // 用户登录
  let queryParams = {
    userName: ctx.request.body.userName
  }
  await db.get('user').find(queryParams).then(docs => {
    console.log(docs,'csdsd');
    let res = {
    };
    if(docs.length && docs[0].password === ctx.request.body.password) {
      res.cb = docs[0];
      res.msg = '登录成功';
      res.code = 'success';
    } else {
      res.cb = '用户名或密码不正确';
      res.code = 'error';
      res.msg = '用户名或密码不正确';
    }
    ctx.response.body = {
      result: res
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})
router.post('/delete', async (ctx, next) => { // 删除
  ctx.request.body && await db.get('user').remove({
    _id: ctx.request.body.contentId,
  }).then(res => {
    ctx.response.body = {
      result: {code: 'success', msg: '成功', cb: res}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})
module.exports = router
