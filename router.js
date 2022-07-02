const Router = require('koa-router');
const router = new Router();
const message = require('./controllers/message.controller');
// const user = require('./controllers/user.controller')

router.get('/messages', message.getMessages);
router.post('/messages', message.postMessage);
// router.get('/user', user.getUser)
// router.post('/user', user.getUser)

module.exports = router;