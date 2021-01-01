import {createStore , combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {cashReducer} from './cashReduser.js'
import {customerReducer} from './customerReducer.js'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(thunk)))

