import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CustomerAccessPage } from "./containers/customerAcessPage";
import { HomePage } from "./containers/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="http://BrandoSoft.github.io/sledzik-front/"
            exact
            component={HomePage}
          />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
