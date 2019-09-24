import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Map } from 'immutable'
import reducers from 'redux/reducer'

const noop = (v) => v

const initStore = (initialState = Map()) => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production'
      ? require('redux-devtools-extension').composeWithDevTools({}) // eslint-disable-line global-require, import/no-extraneous-dependencies
      : noop
  const middlewares = [thunkMiddleware]
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}

export default initStore
