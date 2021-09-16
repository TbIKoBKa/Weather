// Core
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// Middlewares
import { middlewares } from './middlewares';

// Instruments
import { rootReducer } from './rootReducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);
