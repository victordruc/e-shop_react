const express = require("express")
const products = require("./data/products.json")

const app = express()
const port = 3000

app.use(express.static("public"))

// app.get("/", (req,res)=>{
//     res.send("Home page")
// })

app.get("/api/products", (req,res)=>{
    res.json(products)
})

app.get("/api/products/:id", (req,res)=>{
    let {id} = req.params
    // HW1: Array method -> ok
    let product = products.find(item=>item.id==id) || null
    res.json(product)
})

app.listen(port, () => {
    console.log(`Server start http://localhost:${port}`)
  })