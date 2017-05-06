const router = require('express').Router()
const controller = require('./../controllers/user-controller')

router.get('/', controller.list)
router.get('/:id', controller.getUser)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)
router.post('/', controller.save)

module.exports = router