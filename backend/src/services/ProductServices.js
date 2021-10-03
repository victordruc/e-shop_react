const ProductData = require( "../models/Product" ) 
const Attribute = require( '../models/Attribute' ) 
const Money = require( '../models/Money' ) 
const fs = require("fs")

class ProductServices {
    constructor() {
        this.products = []
        this.PRODUCTSLIST = JSON.parse(fs.readFileSync('./src/data/products.json', {encoding:'utf8'}))
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
        return this.products.find(item=>item.id==id) || null
    }

    sortPriceAsc() {
        this.getProduct()
        return this.products.sort((a,b)=>{
            return a.price.standard.amount-b.price.standard.amount
        })
    }

    sortPriceDesc() {
        this.getProduct()
        return this.products.sort((a,b)=>{
            return b.price.standard.amount-a.price.standard.amount
        })
    }
}

module.exports = new ProductServices()
