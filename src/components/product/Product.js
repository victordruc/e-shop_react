import Money from "../ui/Money";
import { useState, useEffect, useContext } from "react";
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
import {CartContext} from "../HOCState/HOCState"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
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
  product: {id, name, imageUrls, price, description, attributes },
}) => {
  const classes = useStyles();
  const [slide, changeSlide] = useState(0);

  const carousel = imageUrls.map((url) => (
    <CardMedia className={classes.media} image={url} title={name} />
  ));

  useEffect(() => {
    const carouselTimer = setInterval(() => {
        slide < imageUrls.length - 1 ? changeSlide(slide + 1) : changeSlide(0);
    }, 3000);
    return () => clearInterval(carouselTimer);
  });
  const {actionDisptach} = useContext(CartContext)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {carousel[slide]}
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
        <Button onClick={()=>{actionDisptach(id)}} variant="contained" color="secondary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
