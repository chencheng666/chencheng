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

router.get('/add', async (ctx, next) => { // 添加文章
  await db.get('content').insert([
    {title:'两年，60万字，说说写作“失败者”的感悟', content:'五一当天，简书给我发过来我的两周年创作提醒，把我吓了一跳，不知不觉两年过去了，就这样漫无目的的写了将近60万字，真的是五一劳动节很好的一个礼物，说明自己一直在“码农”的路上辛勤的耕耘着，唯一的遗憾是依旧没有签约，依旧没有“红”，依旧在自己平凡的工作和生活中平凡的活着，好“失败”。', image:'https://upload-images.jianshu.io/upload_images/1994601-c1db6b8f374f8b4d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/700', meta: {userName: '大漠孤烟直', likeNum:'20', replyNum: '114'}},
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


module.exports = router
