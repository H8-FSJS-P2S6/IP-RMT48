const router = require('express').Router();
const errorMiddleware = require('../middlewares/errorMiddleware');
const productRoute = require('./productRoute');
const userRoute = require('./userRoute');
const orderRoute = require('./orderRoute');

router.use('/', userRoute)
router.use('/products', productRoute)
router.use('/orders', orderRoute)
router.use(errorMiddleware)

module.exports = router;