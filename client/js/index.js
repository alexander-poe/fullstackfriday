import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// imports for store
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
// import {connect, Provider} from 'react-redux';
import CheeseList from '../components/cheese-list';
import * as reducers from '../reducers/cheese';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

export default createStore(reducers.cheeseReducer, applyMiddleware(thunk));


document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(<CheeseList
    cheeses={["Bath Blue ", "Barkham Blue ", "Buxton Blue"]} />,
    document.getElementById('app')
  );
});
