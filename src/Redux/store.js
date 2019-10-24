
import rootReducer from './reducer.js'
import {  createStore } from 'redux'
//import { applyMiddleware, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// import monitorReducersEnhancer from './enhancers/monitorReducer'
// import loggerMiddleware from './middleware/logger'



// export default function configureStore(preloadedState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware];
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = composeWithDevTools(...enhancers)

//   const store = createStore(rootReducer, preloadedState, composedEnhancers)
//   if (process.env.NODE_ENV !== 'production' && module.hot) {
//     module.hot.accept('./reducer', () => store.replaceReducer(rootReducer))
//   }
//   return store
// }
export default createStore(rootReducer);