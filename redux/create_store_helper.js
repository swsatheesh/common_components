import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxReset from 'redux-reset';

export default function createStoreHelper(Reducer = {}, config) {
    // const reducers = combineReducers({
    //     ...Reducer,
    //     ...shellReducerObject
    // });
    const store = createStore(Reducer, config, compose(
        applyMiddleware(thunk, createLogger()),
        reduxReset(),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    return store;
}