class Cart {
    constructor(id, products, items=[]) {
        this.id = id
        this.products = products
        this.items = items
    }

    toPOJO() {
        return {
                id: this.id,
                items: this.items,
                count: this.getCount()
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }

    add(id) {
        if(!this.products.some(product => product.id == id)) return null
        let product = {
            ...this.products.find(product => product.id == id),
            quantity: 1
        }  
        if (this.items.some(product => product.id == id)) {
            this.items.forEach((item) => item.id == id ? item.quantity++ : false)
        } else {
            this.items = [...this.items, product]
        }
        return this.toPOJO()
    }

    remove(id) {
        let qty = this.items.find(item => item.id == id).quantity - 1
        if (!qty) {
            this.items = this.items.filter((product) => product.id != id)
            return this.toPOJO()
        }
        this.items.find(item => item.id == id).quantity = qty
        return this.toPOJO()
    }

    removeAllQty(id) {
        this.items = this.items.filter((product) => product.id != id)
        return this.toPOJO()
    }


    getSingleCount(id) {
        this.items.find(item => item.id == id)
        return this.items.length
    }

    getCount() {
        return this.items.length
    }
}

module.exports = Cart