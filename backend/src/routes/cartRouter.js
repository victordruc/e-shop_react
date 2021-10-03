const Router = require("express") 
const CartController = require("../controllers/CartController")

const cartRouter = new Router()

cartRouter.get("/get-cart", CartController.get)
cartRouter.post("/add-to-cart/:id", CartController.add)
cartRouter.delete("/delete-to-cart/:id", CartController.delete)
cartRouter.delete("/delete-all-to-cart/:id", CartController.deleteAllQty)
cartRouter.get("/get-single-count-cart/:id", CartController.getSingleCount)

module.exports = cartRouter