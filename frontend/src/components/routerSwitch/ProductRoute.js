import {Route} from "react-router-dom";
import switchHoc from "./switchHoc"
import SingleProduct from "../product/SingleProduct";
import Products from "../product/Products";

const ProductRoute = () => {
    return(
       <>
            <Route exact path="/">
              <Products/>
            </Route>
            <Route path="/product/:id">
              <SingleProduct/>
            </Route>
        </>   
    )
}

export default switchHoc(ProductRoute)