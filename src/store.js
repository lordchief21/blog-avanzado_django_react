import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk]


const store = createStore(
    rootReducer, //Este es el combineReducer con alias
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;