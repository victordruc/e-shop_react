import { createContext, useReducer, useEffect } from "react";
import {cartAxios} from "../components/httpClient/axiosAPI"
import PageErrorInternalError from "../components/pageError/PageErrorInternalError";

export const CartContext = createContext();

export const HOCState = ({ children, initState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  
  useEffect(()=>{
    cartAxios.get().then(res=>{
      dispatch({type:"get", payload:res})
    }).catch((e)=>{
      console.error(e)
      dispatch({type:"error"})
    })
  }, [])

  if(state.error) {
    return(
      <PageErrorInternalError/>
    )
  }

  return (
    <CartContext.Provider value={{ state, dispatch, cartAxios}}>
      {children}
    </CartContext.Provider>
  );
};
