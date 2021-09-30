class Money {
    constructor(amount, currency="MDL") {
        this.amount = amount
        this.currency = currency
    }

    toPOJO() {
        return {
            amount: this.amount,
            currency: this.currency.toUpperCase()
        }
    }

    toJSON() {
        return JSON.stringify(this.toPOJO())
    }
}

module.exports = Money