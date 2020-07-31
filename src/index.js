import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
//import devToolsEnhancer from 'remote-redux-devtools';

import './index.css';
import './tailwind.generated.css';
import App from './Containers/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots} from './reducers';


const logger = createLogger();

// if there is more than one reducer then we need to pass all  reducer to the combined reducer then use that into the store
const rootReducer = combineReducers( { searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
ReactDOM.render(
    <React.StrictMode>
      <Provider store = {store}>
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
