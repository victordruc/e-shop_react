import Cart from "../models/Cart";
import ProductServices from "../models/ProductServices";

const products = new ProductServices().getProduct();

const cart = new Cart(1, products)

export const initState = {
    cart: cart.toPOJO(),
    count: cart.getCount(),
}

export const cartReducer = (state, action) => {
  cart.items = [...state.cart.items]
  switch (action.type) {
    case 'add':
      return {...state, cart:cart.add(action.id), count: cart.getCount()};
    case 'remove':
      return {...state, cart:cart.remove(action.id), count: cart.getCount()};
    case 'removeAllQuantity':
      return {...state, cart:cart.removeAllQty(action.id), count: cart.getCount()};
    default:
      return state
  }
}