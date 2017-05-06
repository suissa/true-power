const Express = require('express')
const users = require('./routers/users')
const bodyParser = require('body-parser')

require('./database')

let app = new Express()

app.use(bodyParser.json())

app.get('/ping', (req, res) => {
  res.send('pong')
})

/*
app.use('/*', (req, res, next) => {
  if(req.header('Authorization') == 'SecureToken') {
    next()
  } else {
    res.status(401).send()
  }
})
*/
app.use('/users', users)

app.listen(4000)