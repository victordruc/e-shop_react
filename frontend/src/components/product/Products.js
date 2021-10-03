import ProductCard from "./ProductCard";
import ProductContent from "./ProductContent";
import ProductMenuList from "./ProductMenuList";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CircularProgress from '@material-ui/core/CircularProgress';
import AddToCartButton from "../cart/AddToCartButton";
import Sort from "../ui/Sort";
import { HOCStateProducts, ProductContext } from "../../state/HOCStateProducts";
import {useContext, useEffect} from "react"

const Products = ({api}) => {
  const { state, dispatch } = useContext(ProductContext);
  useEffect(()=> {
    api.getAll().then(res=>dispatch({type:"getAll", payload:res})).catch((e)=>{
      console.error(e)
      dispatch({type:"error"})
    })
  },[api,dispatch])
  let products = state.products

  if(state.isPending) {
    return (
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
        <CircularProgress />
      </Box>
    )  
  }

  return (
    <Box mt={1}>

      <Sort dispatch={dispatch} api={api}/>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item>
            <ProductCard
              {...product}
              actions={<AddToCartButton id={product.id} />}
              content={<ProductContent {...product} />}
              listAction={<ProductMenuList/>}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default HOCStateProducts(Products);
