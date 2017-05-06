const service = require('./../services/user-service')

let controller = {}


controller.list = (req, res) => {
  service.fetch(req.query, (err, users) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(users)
    }
  })

}

controller.getUser = (req, res) => {
  const handleResponse = (err, users) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(users[0])
    }
  }

  service.fetch({_id: req.params.id}, handleResponse)
}

controller.save = (req, res) => {
  let user = req.body
  service.save(user, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

controller.delete = (req, res) => {
  service.delete(req.params.id, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

controller.update = (req, res) => {
  service.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).send()
    } else {
      res.json(result)
    }
  })
}

module.exports = controller



