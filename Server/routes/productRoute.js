const ProductController = require('../controllers/productController');

const router = require('express').Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getOneProduct);
//admin middleware
router.post('/', ProductController.addProduct);
router.put('/:id', ProductController.editProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router