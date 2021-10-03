import { createContext, useReducer } from "react";
import { initState, productsReducer } from "./productsReducer";
import {products} from "../components/httpClient/axiosAPI"
import PageErrorInternalError from "../components/pageError/PageErrorInternalError";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initState);

  if(state.error) {
    return(
      <PageErrorInternalError/>
    )
  }

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const HOCStateProducts = (Component) => () => {
  return (
    <Context>
      <Component api={products}/>
    </Context>
  );
};
