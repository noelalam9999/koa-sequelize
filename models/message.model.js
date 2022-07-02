'use strict';
//const pool = require('./db');
const {sequelize, DataTypes} = require('../sequelize')
const Message = sequelize.define('Message', {
  // Model attributes are defined here

  authorid: {
    type: DataTypes.STRING,

  },
  content: {
    type: DataTypes.STRING,
    
  },
  timestamp: {
    type: DataTypes.STRING,

  }

}, {
  tableName: 'messages'
});
exports.getAll = async () => {
  const res = await Message.findAll() //pool.query('SELECT * FROM messages');
  return res;
};

exports.set = async (msg) => {
  //const sql =
   // 'INSERT INTO messages (authorid, content, timestamp) VALUES ($1, $2, $3)';
 // const values = [msg.authorid, msg.content, Date.now()]
 // return pool.query(sql, values);
 const message = await Message.create(msg);
};