import React from 'react';
import {Provider} from 'react-redux';
import Wrapper from "./components/wrapper/index";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper />
      </div>
    </Provider>
  );
}

export default App;
