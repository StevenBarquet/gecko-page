import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers'

const store = createStore(
    reducers, //todos los reducers
    {},//estado inicial
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);
