var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',usersController.login);
router.post('/register',usersController.register);
router.get('/verify',usersController.verify);
router.get('/logout',usersController.logout);
router.post('/getUser',usersController.getUser);
router.post('/findPassword',usersController.findPassword);
module.exports = router;
