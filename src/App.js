import Product from "./components/product/Product";
import "./App.css";
import ProductServices from "./models/ProductServices";
// import CartModel from "./models/Cart";
import HOC from "./components/cart/Cart";

function App() {
  let products = ProductServices.getProduct();
  // let cart = new CartModel()

  return (
    <div>
      <header style={{textAlign:"right"}}>
        <HOC cartCount={0}/>
      </header>
      <hr/>
      <div className="list_card">
        {products.map((product) => (
          <div key={product.id} className="card">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
