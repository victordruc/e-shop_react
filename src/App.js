import Product from "./components/product/Product"
import ProductData from "./models/Product"
import "./App.css"

function App() {
  const fotoArray = {
    cherries: ["https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg","https://cdn.pixabay.com/photo/2018/05/27/16/10/cherries-3433775_960_720.jpg","https://cdn.pixabay.com/photo/2019/06/07/16/32/cherry-4258570_960_720.jpg"],
    orange: ["https://cdn.pixabay.com/photo/2017/02/06/19/25/mandarins-2043983_960_720.jpg","https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg","https://cdn.pixabay.com/photo/2017/02/26/12/27/oranges-2100108_960_720.jpg"],
    apple: ["https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg","https://cdn.pixabay.com/photo/2016/11/30/15/00/apples-1872997_960_720.jpg","https://cdn.pixabay.com/photo/2015/10/24/20/03/apples-1004886_960_720.jpg"]
  }

  let products = [
    new ProductData(1,"Cherries",fotoArray.cherries, {standard:{amount:10,currency:"MDL"},discount:{amount:8,currency:"MDL"}}, "Minim 10kg", [{name:"Sezon", value:"summer"}]).toPOJO(), 
    new ProductData(2,"Orange",fotoArray.orange, {standard:{amount:18,currency:"MDL"}}, "Minim 2kg", [{name:"Sezon", value:"winter"}]).toPOJO(),
    new ProductData(3,"Apple",fotoArray.apple, {standard:{amount:8,currency:"MDL"},discount:{amount:4,currency:"MDL"}}, "Minim 20kg", [{name:"Sezon", value:"autumn"}]).toPOJO()
  ]
  
  return (
    <div className="list_card">
      {products.map(product => 
        <div key={product.id} className="card">
          <Product
            product={product}
          />
        </div>
      )}
    </div>
  );
}

export default App;
