import { useContext, useState } from "react";
import { CartContext } from "../../state/HOCState";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const AddToCartButton = ({id}) => {
  const { state, dispatch, cartAxios } = useContext(CartContext);
  const [disable, setDisable] = useState(false)

  const add = (id) => {
    setDisable(true)
    cartAxios.add(id).then(res=>{
      dispatch({ type: "add", payload:res })
      setDisable(false)
    }).catch((e)=>{
      console.error(e)
      dispatch({ type: "error"})
    })
  }

  const remove = (id) => {
    setDisable(true)
    dispatch({type: "pending"})
    cartAxios.delete(id).then(res=>{
      dispatch({ type: "remove", payload:res })
      setDisable(false)
    }).catch((e)=>{
      console.error(e)
      dispatch({ type: "error"})
    })
  }

  return (
    <>
      {state?.cart.items.map(
        (item) =>
          item.id === id && (
            <ButtonGroup disabled={disable} variant="contained" color="secondary" key={item.id}>
              <Button onClick={() => add(id)}>+</Button>
              <Button onClick={() => add(id)}>
                Buy {item.quantity + " Pcs"}
              </Button>
              <Button onClick={() => remove(id)}>
                -
              </Button>
            </ButtonGroup>
          )
      )}

      {state.cart.items.some((item) => item.id === id) || (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => add(id)}
          disabled={disable}
        >
          Buy
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
