import rootReducer from './reducer.js';
import {createStore, applyMiddleware} from 'redux';
import * as thunk from 'redux-thunk'


const store = createStore(
    rootReducer,
    applyMiddleware(thunk.default)
)

export default store