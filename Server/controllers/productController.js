const {Product, Category} = require('../models')
class ProductController {
    static async getAllProducts (req, res, next){
        try {
            const data = await Product.findAll({
                include: {
                    model: Category,
                    attributes: ['name']
                }
            });
            await res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }

    static async getOneProduct (req, res, next){
        try {
            const id = req.params.id
            const data = await Product.findByPk(id);
            if (!data){
                throw ({name: 'ProductNotFound'})
            }
            await res.status(200).json(data)
        } catch (error) {
            next(error);
        }
    }

    static async addProduct (req, res, next){
        try {
            const {name, description, price, weight, imgUrl, CategoryId} = req.body;
            const newData = await Product.create({name, description, price, weight, imgUrl, CategoryId})
            res.status(201).json(newData)
        } catch (error) {
            next(error);
        }
    }

    static async editProduct (req, res, next){
        try {
            const id = req.params.id;
            const product =  await Product.findByPk(id);
            const {name, description, price, weight, imgUrl, CategoryId}= req.body;
            const updatedProduct = await product.update({name, description, price, weight, imgUrl, CategoryId});
            await res.status(200).json(updatedProduct)  
        } catch (error) {
            next(error);
        }
    }

    static async deleteProduct (req, res, next){
        try {
            const id = req.params.id;
            const product =  await Product.findByPk(id);
            const {name, description, price, weight, imgUrl, CategoryId}= req.body;
            const updatedProduct = await product.update({name, description, price, weight, imgUrl, CategoryId});
            await res.status(200).json(updatedProduct)  
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductController