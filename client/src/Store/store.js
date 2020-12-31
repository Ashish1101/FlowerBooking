import {createStore , applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/index'

const persistConfig = {
    key: 'storeKeys',
    storage
}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig , rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export

 export let store = createStore(persistedReducer , composeWithDevTools(applyMiddleware(...middleware)));
 export let persistor = persistStore(store);

