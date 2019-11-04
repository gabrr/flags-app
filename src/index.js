import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import store from "./store";
import { fetchCountries } from "./actions";

store.dispatch(fetcher("region/oceania"));

ReactDOM.render(<App />, document.getElementById('root'));
