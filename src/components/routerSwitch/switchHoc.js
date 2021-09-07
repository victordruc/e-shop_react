import {Switch} from "react-router-dom";

const switchHoc = (Component) => () => {
    return(
        <Switch>
            <Component/>
        </Switch>
    ) 
}
export default switchHoc