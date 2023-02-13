const express = require('express')
const router = express.Router()

const usersCtrl = require('../../controllers/api/users')

// localhost:3000/api/users/
// app.use('/api/users', userRoutes)
router.post('/', usersCtrl.create)
// login route
router.post('/login', usersCtrl.logIn)
module.exports = router