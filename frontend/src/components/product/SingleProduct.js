import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';
import ProductContent from "./ProductContent";
import AddToCartButton from "../cart/AddToCartButton";
import Carousel from "../ui/Carousel";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { HOCStateProducts, ProductContext } from "../../state/HOCStateProducts";
import { useEffect, useContext } from "react";

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

const SingleProduct = ({api}) => {
  const { state, dispatch } = useContext(ProductContext);
  const classes = useStyles();
  let { id } = useParams();
  let history = useHistory();
  useEffect(()=>{
    api.getOne(id).then(res=>dispatch({type:"getOne", payload:res})).catch((e)=>{
      console.error(e)
      dispatch({type:"error"})
    })
  },[api,dispatch,id])

  const products = state.products

  if(state.isPending) {
    return (
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
        <CircularProgress />
      </Box>
    )  
  }

  if(!products) {
    return <Redirect to="/error"/>
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={()=>history.goBack()} startIcon={<ArrowBackIosIcon />}>
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
export default HOCStateProducts(SingleProduct);
