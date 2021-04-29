import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CustomerAccessPage } from "./containers/customerAcessPage";
import { HomePage } from "./containers/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/customer/access/:action"
          exact
          component={CustomerAccessPage}
        />
      </Router>
    </div>
  );
};

export default App;
