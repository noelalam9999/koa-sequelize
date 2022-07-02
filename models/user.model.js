'use strict'
const { sequelize, DataTypes } = require('../sequelize')
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
},{
  tableName: 'user'
});

exports.getAllUser = async () => {
  const res = await User.findAll() //pool.query('SELECT * FROM messages');
  return res
}
exports.set = async (name) => {
  //const sql =
  // 'INSERT INTO messages (authorid, content, timestamp) VALUES ($1, $2, $3)';
  // const values = [msg.authorid, msg.content, Date.now()]
  // return pool.query(sql, values);
  const user = await User.create(name)
}