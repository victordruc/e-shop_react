class Cart {
    constructor(id) {
        this.id=id
        this.items = []
    }

    toPOJO() {
        return {
            id: this.id,
            items: this.items
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }

    add(item) {
        this.items.push(item)
    }

    getCount() {
       return this.items.length
    }
}

export default Cart