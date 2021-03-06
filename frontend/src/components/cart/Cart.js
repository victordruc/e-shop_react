import { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import Money from "../ui/Money";
import { CartContext } from "../../state/HOCState";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(1),
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Cart = () => {
  const { state, dispatch, cartAxios } = useContext(CartContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const removeAll = (id) => {
    dispatch({type: "pending"})
    cartAxios.deleteAll(id).then(res=>{
      dispatch({type:"removeAllQuantity", payload:res})
    }).catch((e)=>{
      console.error(e)
      dispatch({ type: "error"})
    })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div>
      <IconButton
        aria-describedby={id}
        variant="contained"
        color="inherit"
        onClick={handleClick}
      >
        <Badge color="secondary" badgeContent={state.cart.count}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {state.cart.items.length ? (
          <div className={classes.demo}>
            <List component="nav">
              {state.cart.items.map((product, index) => (
                <ListItem button component="a" key={index}>
                  <ListItemAvatar>
                    <Avatar alt={product.name} src={product.imageUrls[0]} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <>
                        {product.price.discount ? (
                          <Money
                            type="std"
                            price={{
                              amount: product.price.discount.amount,
                              value: product.price.discount.currency,
                            }}
                          >
                            Price:{" "}
                          </Money>
                        ) : (
                          <Money
                            type="std"
                            price={{
                              amount: product.price.standard.amount,
                              value: product.price.standard.currency,
                            }}
                          >
                            Price:{" "}
                          </Money>
                        )}
                        <span> QTY: {product.quantity}</span>
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      disabled={state.isPending}
                      onClick={() =>
                        removeAll(product.id)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        ) : (
          <Typography className={classes.typography} color="primary">
            Empty cart
          </Typography>
        )}
      </Popover>
    </div>
  );
};

export default Cart;
