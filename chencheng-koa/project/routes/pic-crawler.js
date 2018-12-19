const router = require('koa-router')();
const { start } = require('./util/getImg/index');
// const monk = require('monk');
// const db = monk('localhost:27017/blog'); // mongodb 链接
// const id = monk.id('4ee0fd75d6bd52107c000118')

router.prefix('/pic-crawler');

router.post('/get', async (ctx, next) => { // 添加文章
  if(ctx.request.body && 
    ctx.request.body.url &&
    /^(https?:\/\/)?www\./.test(ctx.request.body.url)) {
      await start(ctx.request.body.url).then(res => {
        ctx.response.body = {
          result: {code: 'success', msg: '成功', cb: res}
        }
      }).catch(err => {
        ctx.response.body = {
          result: {code: 'failed', msg: '失败', cb: '发生错误'}
        }
      });
  } else {
    ctx.response.body = {
      result: {code: 'failed', msg: '失败', cb: '网址不正确'}
    }
  }
});
module.exports = router;
