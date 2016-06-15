import React from 'react';
import {render} from 'react-dom';
import App from 'compo/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'main.scss';

const reducers = (state) => state;

fetch('https://api.themoviedb.org/3/discover/movie?api_key=61a7fe0a2defc2d41f21253258bf6a4e', {
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Content-Type': 'text/plain'
  })
})
  .then(response => response.json())
  .then(response => {

    const initialState = {
      movies: response.results
    };
    const store = createStore(reducers, initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>, document.getElementById('app')
    );
  });

