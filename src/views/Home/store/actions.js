import types from './types'

export function clearState() {
  return { type: types.CLEAR_STATE }
}

export function searchMovies() {
  return async dispatch => {
    try {
      const data = await dispatch({
        type: types.SEARCH_MOVIES,
        payload: {
          request: {
            url: '/',
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
