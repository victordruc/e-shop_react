const Router = require("express") 
const ProductController = require("../controllers/ProductController")

const productRouter = new Router()

productRouter.get("/products", ProductController.getAll)
productRouter.get("/products/price-asc", ProductController.sortPriceAsc)
productRouter.get("/products/price-desc", ProductController.sortPriceDesc)
productRouter.get("/products/:id", ProductController.getOne)

module.exports = productRouter