import Container from "@material-ui/core/Container";
import Header from "./components/header/Header";
import { HOCState } from "./state/HOCState";
import { initState, cartReducer } from "./state/cartReducer";
import { BrowserRouter as Router } from "react-router-dom";
import ProductRoute from "./components/routerSwitch/ProductRoute";

function App() {
  return (
    <div>
      <HOCState initState={initState} reducer={cartReducer}>
        <Router>
          <Header />
          <Container>
            <ProductRoute />
          </Container>
        </Router>
      </HOCState>
    </div>
  );
}

export default App;
