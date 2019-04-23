//import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './App';
import { initialState } from './reducers';
import * as serviceWorker from './serviceWorker';

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();


