import { Suspense, lazy, useState } from "react";
//routes
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//components
import NotFound from "../NotFound";
import ErrorBoundary from "../ErrorBoundary";
import PrivateRoute from "../PrivateRoute";
import Authorization from "../../components/Authorization";
//styles
import "./MainContent.module.scss";

const Home = lazy(() => import("../Home"));
const Calculating = lazy(() => import("../Calculating"));

const MainContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/">
              <Home isLoggedIn={isLoggedIn}/>
            </Route>
            <PrivateRoute
              exact
              path="/calc"
              component={Calculating}
              condition={isLoggedIn}
            />
            <Route exact path="/auth">
              {isLoggedIn ? <Redirect to="/" /> : <Authorization setIsLoggedIn={setIsLoggedIn}/>}
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default MainContent;
