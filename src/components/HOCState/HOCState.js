import { createContext, useState } from "react";
import Cart from "../../models/Cart"
import ProductServices from "../../models/ProductServices"


export const CartContext = createContext();


export const HOCState = ({children}) => {
const products = ProductServices.getProduct();
const cartItems = new Cart(1)
const [state, setState] = useState(cartItems.toPOJO().items);
  const actionDisptach = (id) => {
    let productItem = products.find(item=>item.id===id)
    cartItems.add(productItem)
    setState(cartItems.toPOJO().items)
  }
  return( 
  <CartContext.Provider value = {{state,actionDisptach}}>{children}</CartContext.Provider>
  )
};