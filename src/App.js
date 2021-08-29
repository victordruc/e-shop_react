import ProductContainer from "./components/product/ProductContainer";
import Container from "@material-ui/core/Container";
import Header from "./components/header/Header";
import { HOCState } from "./state/HOCState";
import {initState, cartReducer} from "./state/cartReducer"

function App() {
  return (
    <div>
      <HOCState initState={initState} reducer={cartReducer}>
        <Header />
        <Container>
          <ProductContainer />
        </Container>
      </HOCState>
    </div>
  );
}

export default App;
