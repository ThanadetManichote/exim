import { combineReducers } from 'redux-immutable'
import appReducer from 'redux/app/reducer'

export default combineReducers({
  app: appReducer,
})
