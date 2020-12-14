import './App.css';
import React from 'react';
import './App.css';
import {Route, Redirect, Switch, HashRouter} from 'react-router-dom';
import Login from "./login/Login";

function App() {
    const EnabledRouter = HashRouter;
  return (
      <div className="App">
          <EnabledRouter>
              <Switch>
                  <Route
                      exact
                      path={"/"}
                      component={Login}
                  />

                  <Redirect
                      to={"/"}
                  />
              </Switch>
          </EnabledRouter>
      </div>
  );
}

export default App;
