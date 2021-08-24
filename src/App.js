import ProductContainer from "./components/product/ProductContainer";
import Container from "@material-ui/core/Container";
import Header from "./components/header/header";
import { HOCState } from "./components/HOCState/HOCState";

function App() {
  return (
    <div>
      <HOCState>
        <Header />
        <Container>
          <ProductContainer />
        </Container>
      </HOCState>
    </div>
  );
}

export default App;
