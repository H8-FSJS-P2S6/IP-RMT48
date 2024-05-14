const router = require('express').Router();
const productRoute = require('./productRoute');
const userRoute = require('./userRoute');

router.use('/', userRoute)
router.use('/products', productRoute)

module.exports = router;