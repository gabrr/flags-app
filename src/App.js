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
          <div className="App">
            <Wrapper />
          </div>
      </Provider>
    </Router>
  );
}


export default App;
