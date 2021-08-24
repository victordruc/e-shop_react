
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ProductServices from "../../models/ProductServices";

const ProductContainer = (props) => {
  let products = ProductServices.getProduct();
  return (
    <Box mt={1}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default ProductContainer;
