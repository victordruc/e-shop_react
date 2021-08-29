import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const HOCState = ({ children, initState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
