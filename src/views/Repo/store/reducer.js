import { handleActions, combineActions } from 'redux-actions'
import types from './types'

const INITIAL_STATE = {
  isLoading: true,
  repo: null,
  issues: []
}

const beginLoading = combineActions(
  types.SEARCH_REPO_INFO,
  types.SEARCH_REPO_ISSUES
)

const stopLoading = combineActions(
  types.SEARCH_REPO_INFO_SUCCESS,
  types.SEARCH_REPO_INFO_FAIL,
  types.SEARCH_REPO_ISSUES_SUCCESS,
  types.SEARCH_REPO_ISSUES_FAIL
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
    [types.SEARCH_REPO_INFO_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      repo: data,
      isLoading: false
    }),
    [types.SEARCH_REPO_ISSUES_SUCCESS]: (state, { payload: { data } }) => ({
      ...state,
      issues: data,
      isLoading: false
    }),
    [types.CLEAR_STATE]: () => INITIAL_STATE
  },
  INITIAL_STATE
)

export default reducer
