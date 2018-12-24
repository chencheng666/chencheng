const router = require('koa-router')()
// const monk = require('monk');
const path = require('path');
// const db = monk('localhost:27017/blog'); // mongodb 链接
// const id = monk.id('4ee0fd75d6bd52107c000118')

router.prefix('/img')

router.get('/*', async (ctx, next) => { // 获取文章列表
  // console.log(ctx.request ,'ctx')
  // console.log(path.resolve(__dirname, '../public/images'));
  // res.sendFile( __dirname + "/" + req.url );


  // let queryParams = {
  // }
  // if(ctx.request.query && ctx.request.query.keyword) {
  //   queryParams.title = new RegExp(`${decodeURI(ctx.request.query.keyword)}`);
  // }
  // await db.get('content').find(queryParams).then(docs => {
  //   ctx.response.body = {
  //     result: {contentList: docs}
  //   }
  // }).catch(e => {
  //   ctx.response.body = {
  //     result: {code: 'error', msg: '失败', cb: e}
  //   }
  // });
})
module.exports = router
