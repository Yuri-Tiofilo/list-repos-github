import { handleActions, combineActions } from 'redux-actions'
import types from './types'

const INITIAL_STATE = {
  isLoading: true,
  movies: []
}

const beginLoading = combineActions(types.SEARCH_MOVIES)

const stopLoading = combineActions(
  types.SEARCH_MOVIES_SUCCESS,
  types.SEARCH_MOVIES_FAIL
)

const reducer = handleActions(
  {
    [beginLoading]: state => ({
      ...state,
      isLoading: true
    }),
    [stopLoading]: state => ({
      ...state,
      isLoading: false
    }),
    [types.SEARCH_MOVIES_SUCCESS]: (
      state,
      {
        payload: {
          data: { data }
        }
      }
    ) => ({
      ...state,
      movies: data,
      isLoading: false
    }),
    [types.CLEAR_STATE]: () => INITIAL_STATE
  },
  INITIAL_STATE
)

export default reducer
