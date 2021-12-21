import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CustomerAccessPage } from "./containers/customerAcessPage";
import { HomePage } from "./containers/HomePage";
import { UserPage } from "./containers/UserPage/UserPage";
import AppProvider from "./AppContext";


const App = () => {
console.log('api to',process.env.REACT_APP_API_LOCAL)

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
            <Route
              path="/usersettings"
              exact
              component={UserPage}
            />
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
};

export default App;
