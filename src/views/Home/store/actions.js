import types from './types'

export function clearState() {
  return { type: types.CLEAR_STATE }
}

export function setUrlSearch({ url }) {
  return { type: types.SET_URL_SEARCH, url }
}

export function searchRepos({ term, page, url }) {
  return async dispatch => {
    try {
      const data = await dispatch({
        type: types.SEARCH_REPOS,
        payload: {
          request: {
            url: url,
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
