class Attribute {
    constructor(name, value) {
        this.name = name
        this.value = value
    }

    toPOJO() {
        return {
            name: this.name,
            value: this.value
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }
}

module.exports = Attribute