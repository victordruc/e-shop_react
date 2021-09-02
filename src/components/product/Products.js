import ProductCard from "./ProductCard";
import ProductContent from "./ProductContent";
import ProductMenuList from "./ProductMenuList";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ProductServices from "../../models/ProductServices";
import AddToCartButton from "../cart/AddToCartButton";

const Products = () => {
  let products = ProductServices.getProduct();
  return (
    <Box mt={1}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item>
            <ProductCard
              {...product}
              actions={<AddToCartButton id={product.id} />}
              content={<ProductContent {...product} />}
              listAction={<ProductMenuList/>}
            />
            {/* Este posibil de-a fi trimis nu ca componenta JSX dar ca o functie callBack care in componeta ProductCard va fi apeleta cu atributele cerute */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Products;
