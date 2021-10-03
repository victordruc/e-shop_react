const fs = require("fs")
const ProductServices =  require("./ProductServices")
const Cart = require("../models/Cart")

let cartJson = fs.readFileSync('./src/data/cart.json', {encoding:'utf8', flag:'as+'})

cartJson=cartJson?JSON.parse(fs.readFileSync('./src/data/cart.json', 'utf8')):[]

class CartServices extends Cart {
    constructor(...args) {
        super(...args);
      }
}

module.exports = new CartServices(1,ProductServices.getProduct(),cartJson.items)