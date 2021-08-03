class Product {
    constructor(id, name, image) {
        this.id = id
        this.name = name
        this.image = image
    }

    toPOJO() {
        return {
            id: this.id,
            name: this.name,
            image: this.image
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }
}

export default Product