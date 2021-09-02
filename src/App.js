import Products from "./components/product/Products";
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
          <Products />
        </Container>
      </HOCState>
    </div>
  );
}

export default App;
