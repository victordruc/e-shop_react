const fs = require("fs")

let j = {
    id: 1,
    name: "Cherries"
}

let b = {
    id: 2,
    name: "Cherries"
}

fs.writeFileSync('./src/data/cart.json', JSON.stringify(j))


fs.writeFileSync('./src/data/cart.json', JSON.stringify(b))