import { Map } from 'immutable'
import { types } from './actions'

const initialState = new Map({
  isMobileState: false,
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.APP_IS_MOBILE:
      return state.set('isMobileState', action.payload)
    default:
      return state
  }
}
