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
    <div className="list_card">
      {/* 
      HW2: keys heare:
        Aici avem nevoie de key deaorece pentru un render mai eficient, React verifica fiecare key in cadrul listei si adauga sau modifica doar elementul a carui key difera sau necesita modificat.
      */}
      {products.map(product => 
        <Product
          element={{element:"div",className:"card"}}
          product={product}
          key={product.id}
        />
      )}
    </div>
  );
}

export default App;
