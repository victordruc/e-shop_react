import Product from "./components/product/Product"
import ProductData from "./models/Product"
import "./App.css"

function App() {
  let products = [
    new ProductData(1,"Cherries","https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_960_720.jpg").toPOJO(), 
    new ProductData(2,"Orange","https://cdn.pixabay.com/photo/2017/02/06/19/25/mandarins-2043983_960_720.jpg").toPOJO(),
    new ProductData(3,"Apple","https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg").toPOJO()
  ]
  return (
    <ul className="list_card">
      {products.map(product => 
        <Product 
          product={product}
          key={product.id}
        />
      )}
    </ul>
  );
}

export default App;
