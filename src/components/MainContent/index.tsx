import { FC,Suspense, lazy, useState } from "react";
//routes
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//components
import NotFound from "../NotFound";
import ErrorBoundary from "../ErrorBoundary";
import PrivateRoute from "../PrivateRoute";
import Authorization from "../Authorization";

const Home = lazy(() => import("../Home"));
const Guarded = lazy(() => import("../Guarded"));

const MainContent: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
              path="/guard"
              component={Guarded}
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
