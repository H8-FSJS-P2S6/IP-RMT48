const router = require('express').Router();
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

router.use(authenticationMiddleware);
router
module.exports = router;