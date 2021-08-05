class Product {
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    toPOJO() {
        return {
            id: this.id,
            name: this.name,
            imageUrl: this.imageUrl
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }
}

export default Product