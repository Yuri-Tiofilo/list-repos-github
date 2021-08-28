import { handleActions, combineActions } from 'redux-actions'
import types from './types'

const INITIAL_STATE = {
  isLoading: true,
  repos: [],
  url: ''
}

const beginLoading = combineActions(types.SEARCH_REPOS)

const stopLoading = combineActions(
  types.SEARCH_REPOS_SUCCESS,
  types.SEARCH_REPOS_FAIL
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
    [types.SEARCH_REPOS_SUCCESS]: (state, { payload: { data } }) => {
      if (data.items) {
        return {
          ...state,
          repos: data.items,
          isLoading: false
        }
      } else {
        return {
          ...state,
          repos: data,
          isLoading: false
        }
      }
    },
    [types.SET_URL_SEARCH]: (state, { url }) => ({
      ...state,
      url
    }),
    [types.CLEAR_STATE]: () => INITIAL_STATE
  },
  INITIAL_STATE
)

export default reducer
