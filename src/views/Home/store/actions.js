import types from './types'

export function clearState() {
  return { type: types.CLEAR_STATE }
}

export function searchRepos({ term, page }) {
  return async dispatch => {
    try {
      const data = await dispatch({
        type: types.SEARCH_REPOS,
        payload: {
          request: {
            url: `/search/repositories?q=${term}&page=${page}&per_page=6`,
            method: 'GET'
          }
        }
      })

      console.log('payload', data)
    } catch (error) {
      console.log('error', error)
    }
  }
}
