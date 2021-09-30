const ProductServices =  require("../services/ProductServices")

class ProductController {
    getAll(req,res) {
        try {
            const products = ProductServices.getProduct();
            return res.json(products);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getOne(req,res) {
        try {
            const product = ProductServices.getSingleProduct(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new ProductController()