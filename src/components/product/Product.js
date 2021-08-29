import Money from "../ui/Money";
import { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { CartContext } from "../../state/HOCState";
import Carousel from "../ui/Carousel";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    height: 480,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
  },
  media: {
    height: 200,
  },
});
const Product = ({
  product: { id, name, imageUrls, price, description, attributes },
}) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(CartContext);
  let [runSlider, setRunSlider] = useState(false);
  return (
    <Card
      className={classes.root}
      onMouseEnter={() => {
        setRunSlider(true);
      }}
      onMouseLeave={() => {
        setRunSlider(false);
      }}
    >
      <CardActionArea>
        <CardMedia className={classes.media}>
          <Carousel imageUrls={imageUrls} runSlider={runSlider} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Divider />
          <Typography align="left">Description: {description}</Typography>
          <Divider />
          <List disablePadding>
            {attributes.map(({ name, value }) => (
              <ListItem key={name} disableGutters>
                <ListItemText primary={name + ": " + value} />
              </ListItem>
            ))}
          </List>
          <Divider />
          {price.discount ? (
            <Typography variant="button" display="block" gutterBottom>
              <div>
                <Money
                  price={{
                    amount: price.standard.amount,
                    value: price.standard.currency,
                  }}
                  type="old"
                >
                  Old price:{" "}
                </Money>
              </div>
              <div>
                <Money
                  price={{
                    amount: price.discount.amount,
                    value: price.discount.currency,
                  }}
                  type="act"
                >
                  Actual price:{" "}
                </Money>
              </div>
            </Typography>
          ) : (
            <Typography variant="button" display="block" gutterBottom>
              <Money
                price={{
                  amount: price.standard.amount,
                  value: price.standard.currency,
                }}
                type="std"
              >
                Price:{" "}
              </Money>
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "center" }}>
        {state.cart.items.map(
          (item) =>
            item.id === id && (
              <ButtonGroup variant="contained" color="secondary">
                <Button onClick={() => dispatch({ type: "add", id })}>+</Button>
                <Button onClick={() => dispatch({ type: "add", id })}>
                  Buy {item.quantity + " Pcs"}
                </Button>
                <Button onClick={() => dispatch({ type: "remove", id })}>-</Button>
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
      </CardActions>
    </Card>
  );
};

export default Product;