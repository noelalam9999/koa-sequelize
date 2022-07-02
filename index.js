const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
require('dotenv').config();
const router = require('./router');
const sequelize = require('./sequelize')

app.use(serve(__dirname + '/../../client'));
app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());

// sequelize.sync().then(res=>{
//  // console.log(res);
// }).catch(e=>{
//   console.log(e);
// })

const port = 3001 ;


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); 
});
