import {Switch, Route} from "react-router-dom";
import PageError from "../pageError/PageError";

const switchHoc = (Component) => () => {
    return(
        <Switch>
            <Route path="/error" component={PageError} />
            <Component/>
        </Switch>
    ) 
}
export default switchHoc