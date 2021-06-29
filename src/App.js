import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CustomerAccessPage } from "./containers/customerAcessPage";
import { HomePage } from "./containers/HomePage";
import AppProvider from "./AppContext";


const App = () => {

  return (
    <div>
      <AppProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/customer/access/:action"
              exact
              component={CustomerAccessPage}
            />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
