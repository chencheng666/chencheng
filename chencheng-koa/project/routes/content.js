const router = require('koa-router')()
// const ObjectID = require('mongodb').ObjectID;
const db = require('monk')('localhost:27017/blog'); // mongodb 链接

router.prefix('/content')

router.get('/', async (ctx, next) => { // 获取文章列表
  await db.get('content').find({}).then(docs => {
    ctx.response.body = {
      result: {contentList: docs}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})

router.get('/detail', async (ctx, next) => { // 文章详细
  console.log(ctx.request.query,'detail');
  let queryParams = {
  }
  if(ctx.request.query && ctx.request.query._id) {
    queryParams._id = ctx.request.query._id;
  } else {
    return;
  }
  await db.get('content').findOne({'_id': queryParams._id}).then(docs => {
    console.log(docs, 'docs');
    ctx.response.body = {
      result: {data: docs}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})

router.post('/add', async (ctx, next) => { // 添加文章
  ctx.request.body && await db.get('content').insert([
    {
      title: ctx.request.body.title,
      image: ctx.request.body.cover,
      type: ctx.request.body.type,
      category: ctx.request.body.category,
      content: ctx.request.body.content,
      meta: ctx.request.body.meta
    }
  ]).then(res => {
    ctx.response.body = {
      result: {code: 'success', msg: '成功', cb: res}
    }
  }).catch(e => {
    ctx.response.body = {
      result: {code: 'error', msg: '失败', cb: e}
    }
  });
})

router.post('delete', async (ctx, next) => { // 删除
  ctx.request.body && await db.get('content').remove({
    _id: ctx.request.body.id,
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
