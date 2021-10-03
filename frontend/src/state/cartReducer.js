export const initState = {
  cart: {
    items: []
  },
  isPending: true,
  error: false
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        cart: action.payload, isPending: false, error: false
      };
    case 'add':
      return {
        cart: action.payload, isPending: false, error: false
      };
    case 'remove':
      return {
        cart: action.payload, isPending: false, error: false
      };
    case 'removeAllQuantity':
      return {
        cart: action.payload, isPending: false, error: false
      };
    case 'pending':
      return {
        ...state, isPending: true, error: false
      };
    case 'error':
      return {
        ...state, error:true
      };
    default:
      return state
  }
}