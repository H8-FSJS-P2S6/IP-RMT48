const {Product} = require('../models')
class ProductController {
    static async getAllProducts (req, res, next){
        try {
            const data = await Product.findAll();
            await res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async getOneProduct (req, res, next){
        try {
            const id = req.params.id
            const data = await Product.findByPk(id);
            await res.status(200).json(data)
        } catch (error) {
            console.log(error)
        }
    }

    static async addProduct (req, res, next){
        try {
            const {name, description, price, weight, imgUrl, CategoryId} = req.body;
            const newData = await Product.create({name, description, price, weight, imgUrl, CategoryId})
            res.status(201).json(newData)
        } catch (error) {
            console.log(error)
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
            console.log(error)
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
            console.log(error)
        }
    }
}

module.exports = ProductController