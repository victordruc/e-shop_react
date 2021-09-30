const Router = require("express") 
const ProductController = require("../controllers/ProductController")

const productRouter = new Router()

productRouter.get("/products", ProductController.getAll)
productRouter.get("/products/:id", ProductController.getOne)

module.exports = productRouter