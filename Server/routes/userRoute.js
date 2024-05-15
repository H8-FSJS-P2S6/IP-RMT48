const UserController = require('../controllers/userController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

const router = require('express').Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.use(authenticationMiddleware);
router.post('/userDetails', UserController.updateUserDetails)

module.exports = router