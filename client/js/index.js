import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// imports for store
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import CheeseList from '../components/cheese-list';
import * as reducers from '../reducers/cheese';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

const store = createStore(reducers.cheeseReducer, applyMiddleware(thunk));

export default store;

document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider>
      <CheeseList />
    </Provider>,
    document.getElementById('app')
  );
});
