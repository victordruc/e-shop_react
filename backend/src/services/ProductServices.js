const ProductData = require( "../models/Product" ) 
const Attribute = require( '../models/Attribute' ) 
const Money = require( '../models/Money' ) 
const products = require( "../data/products.json" ) 

class ProductServices {
    constructor() {
        this.products = []
        this.PRODUCTSLIST = products
    }

    getProduct() {
        this.products = []
        this.PRODUCTSLIST.forEach(({id, name, foto, price:{standard, discount}, description, attribute})=>this.products.push(
            new ProductData(
                id,
                name,
                Array.isArray(foto) ? foto : [],
                {
                    standard: standard ? new Money(standard.amount, standard.currency).toPOJO() : false,
                    discount: discount ? new Money(discount.amount, discount.currency).toPOJO() : false
                },
                description,
                attribute.map(atr => new Attribute(atr.name, atr.value).toPOJO())
            ).toPOJO())
        )
        return this.products
    }

    getSingleProduct(id) {
        this.getProduct()
        return this.products.find(item=>item.id==id)
    }
}

module.exports = new ProductServices()