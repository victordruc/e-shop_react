export const initState = {
    products:[],
    isPending: true,
    error: false
}

export const productsReducer = (state, action) => {
  switch (action.type) {
    case 'getAll':
    return {products:action.payload, isPending:false, error: false}
    case 'getOne':
    return {products:action.payload, isPending:false, error: false}
    case 'sortPriceAsc':
    return {products:action.payload, isPending:false, error: false}
    case 'sortPriceDesc':
    return {products:action.payload, isPending:false, error: false}
    case 'error':
    return {...state, error:true}
    default:
      return state
  }
}