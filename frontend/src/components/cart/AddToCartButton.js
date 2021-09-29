import { useContext } from "react";
import { CartContext } from "../../state/HOCState";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const AddToCartButton = ({id}) => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <>
      {state.cart.items.map(
        (item) =>
          item.id === id && (
            <ButtonGroup variant="contained" color="secondary" key={item.id}>
              <Button onClick={() => dispatch({ type: "add", id })}>+</Button>
              <Button onClick={() => dispatch({ type: "add", id })}>
                Buy {item.quantity + " Pcs"}
              </Button>
              <Button onClick={() => dispatch({ type: "remove", id })}>
                -
              </Button>
            </ButtonGroup>
          )
      )}

      {state.cart.items.some((item) => item.id === id) || (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({ type: "add", id })}
        >
          Buy
        </Button>
      )}
    </>
  );
};

export default AddToCartButton;
