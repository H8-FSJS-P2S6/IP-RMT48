const router = require('express').Router();
const errorMiddleware = require('../middlewares/errorMiddleware');
const productRoute = require('./productRoute');
const userRoute = require('./userRoute');
const orderRoute = require('./orderRoute');
const paymentRoute = require('./paymentRoute');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

router.use('/', userRoute)
router.use(authenticationMiddleware)
router.use('/products', productRoute)
router.use('/orders', orderRoute)
router.use('/payments', paymentRoute)
router.use(errorMiddleware)

module.exports = router;