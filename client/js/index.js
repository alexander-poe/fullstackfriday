import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux';
import CheeseList from '../components/cheese-list';

console.log(`Client running in ${process.env.NODE_ENV} mode`);


document.addEventListener('DOMContentLoaded', () => {
  return ReactDOM.render(
    <Provider store={store}>
      <CheeseList />
    </Provider>,
    document.getElementById('app')
  );
});
