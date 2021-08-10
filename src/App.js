import Product from "./components/product/Product"
import "./App.css"
import ProductServices from "./models/ProductServices"

function App() {
  let products = ProductServices.getProduct()
  
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
