const fs = require("fs")
const CartServices =  require("../services/CartServices")

class CartController {

    get(req,res) {
        try {
            const product = CartServices.toPOJO();
            if(!product) return res.status(404).json(product)
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    add(req,res) {
        try {
            const product = CartServices.add(req.params.id);
            if(!product) return res.status(404).json(product)
            fs.writeFileSync('./src/data/cart.json', JSON.stringify(product),'utf8')
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    delete(req,res) {
        try {
            const product = CartServices.remove(req.params.id);
            if(!product) return res.status(404).json(product)
            fs.writeFileSync('./src/data/cart.json', JSON.stringify(product),'utf8')
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    deleteAllQty(req,res) {
        try {
            const product = CartServices.removeAllQty(req.params.id);
            if(!product) return res.status(404).json(product)
            fs.writeFileSync('./src/data/cart.json', JSON.stringify(product),'utf8')
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    getSingleCount(req,res) {
        try {
            const product = CartServices.getSingleCount(req.params.id);
            if(!product) return res.status(404).json(product)
            fs.writeFileSync('./src/data/cart.json', JSON.stringify(product),'utf8')
            return res.json(product);
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new CartController()