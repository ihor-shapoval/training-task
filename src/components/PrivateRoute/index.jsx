import  {memo} from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = ({path, exact, component, condition}) => {

    return condition ? (<Route  path={path}  exact={exact}  component={component} />) : 
        (<Redirect  to="/"/>);
};
export  default  memo(PrivateRoute);
