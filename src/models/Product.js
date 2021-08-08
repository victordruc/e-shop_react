import Money from './Money'
import Attribute from './Attribute'

class Product {
    constructor(id, name, imageUrls, {standard, discount}=false, description, attributes=false) {
        this.id = id
        this.name = name
        this.imageUrls = Array.isArray(imageUrls)?imageUrls:[]
        this.price =  {
            standard: standard?new Money(standard.amount, standard.currency).toPOJO():false,
            discount: discount?new Money(discount.amount, discount.currency).toPOJO():false
        }
        this.description = description
        this.attributes = attributes?attributes.map(atr=>new Attribute(atr.name, atr.value).toPOJO()):[]
    }

    toPOJO() {
        return {
            id: this.id,
            name: this.name,
            imageUrls: this.imageUrls,
            price: this.price,
            description: this.description,
            attributes: this.attributes
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }
}

export default Product