import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProductContent from "./ProductContent";
import ProductServices from "../../models/ProductServices";
import AddToCartButton from "../cart/AddToCartButton";
import Carousel from "../ui/Carousel";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  content: {
    margin: "auto",
  },
  image: {
    width: 400,
    height: 400,
    display: "flex",
    overflow: "hidden",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const SingleProduct = () => {
  const classes = useStyles();
  let { id } = useParams();
  let history = useHistory();
  let products = ProductServices.getProduct()[id - 1];

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={()=>history.goBack()}>
        Back
      </Button>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item lg={4}>
          <div className={classes.image}>
            <div className={classes.img}>
              <Carousel imageUrls={products.imageUrls} runSlider={true} />
            </div>
          </div>
        </Grid>

        <Grid item lg={8} className={classes.content}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" component="h2">
                {products.name}
              </Typography>
            </Grid>
            <Grid item>
              <ProductContent {...products} />
            </Grid>
            <Grid item>
              <AddToCartButton id={products.id} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleProduct;
