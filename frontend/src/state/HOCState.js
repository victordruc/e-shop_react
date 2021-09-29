import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

export const HOCState = ({ children, initState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initState, ()=>{
    const localData = localStorage.getItem("cart")
    return localData ? JSON.parse(localData): initState
  });
  
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
