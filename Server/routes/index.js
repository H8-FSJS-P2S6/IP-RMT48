const router = require('express').Router();
const errorMiddleware = require('../middlewares/errorMiddleware');
const productRoute = require('./productRoute');
const userRoute = require('./userRoute');

router.use('/', userRoute)
router.use('/products', productRoute)
router.use(errorMiddleware)

module.exports = router;