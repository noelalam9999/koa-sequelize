'use strict'

const user = require('../models/user.model.js')

exports.getUser = async (ctx) => {
  try {
    ctx.body = await user.getAllUser()
  } catch (e) {
    ctx.status = 500
    // Further handle your error on the back-end
  }
}

exports.postUser = async (ctx) => {
  try {
    await user.set(ctx.request.body)
    ctx.status = 200
  } catch (e) {
    console.log(e)
    ctx.status = 500
    // Further handle your error on the back-end
  }
}
