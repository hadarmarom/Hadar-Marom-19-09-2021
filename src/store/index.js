import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import { weatherReducer } from './reducers/weatherReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  weatherReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))