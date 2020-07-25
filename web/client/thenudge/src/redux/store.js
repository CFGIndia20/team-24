// Setting up the Redux Store
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Applying thunk and logger debugging middleware
const middleware = [thunk];

// Setting initialState to empty object
const initialState = {}

// Store initialization
const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);

export default store;