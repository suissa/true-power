const userModel = require('./../models/user')
const ObjectId = require('mongoose').Types.ObjectId


let service = {}

service.fetch = (params, cb) => {

  if(params._id) {
    params._id = new ObjectId(params._id)
  }

  userModel.find(params, (err, users) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, users)
    }
  })
}

service.save = (data, cb) => {
  const user = new userModel(data)
  user.save(user, (err, result) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, result)
    }
  })
}

service.update = (id, data, cb) => {
  id = new ObjectId(id)
  userModel.update({_id: id},{'$set': data}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

service.delete = (id, cb) => {
  userModel.remove({_id: ObjectId(id)}, (err, results) => {
    if(err) {
      console.log('database error')
      cb(err)
    } else {
      cb(null, results)
    }
  })
}

module.exports = service