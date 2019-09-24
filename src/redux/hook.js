import { useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector, useStore } from 'react-redux'

const useActions = (actions) => {
  const dispatch = useDispatch()
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.map((a) => bindActionCreators(a, dispatch))
    }
    return bindActionCreators(actions, dispatch)
  }, [dispatch, actions])
}

export { useActions, useSelector, useStore }
