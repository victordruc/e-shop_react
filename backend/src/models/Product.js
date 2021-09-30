class Product {
    constructor(id, name, imageUrls, price, description, attributes) {
        this.id = id
        this.name = name
        this.imageUrls = imageUrls
        this.price = price
        this.description = description
        this.attributes = attributes
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

module.exports = Product