const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('chat', 'shahriarakash', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  port: '5432'
});

(async () => {
  await sequelize.sync();
})();
//const sequelize = new Sequelize('postgres://shahriarakash:1234@127.0.0.1:5432/chat');
// class Message extends Model {}

// Message.init({
 
//   authorid: {
//     type: DataTypes.STRING
 
//   },
//   content: {
//     type: DataTypes.STRING
  
//   },

//   timestamp: {
//     type: DataTypes.STRING
 
//   }
// }, {

//   sequelize, 
//   modelName: 'Message' 
// });
// const users = Message.findAll();
// console.log(users.every(user => user instanceof Message)); // true
// console.log("All users:", JSON.stringify(users, null, 2));
module.exports = {sequelize, DataTypes};