import React from 'react';
import {Provider} from 'react-redux';
import Wrapper from "./components/wrapper/index";
import store from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
            <Route exact path="/">
              <div className="App">
                <Wrapper />
              </div>
            </Route>
            <Route path="/details">
              <Details />
            </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export const Details = () => <h1>Hey deatils</h1>

export default App;
