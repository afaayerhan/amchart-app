import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Main } from './App.js'
const store = configureStore();

ReactDom.render(<Provider store={store} ><Main /></Provider>, document.getElementById('root'));