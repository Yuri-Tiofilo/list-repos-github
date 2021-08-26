import types from './types'

export function clearState() {
  return { type: types.CLEAR_STATE }
}

export function searchRepoInfos({ name, owner }) {
  return async dispatch => {
    try {
      const data = await dispatch({
        type: types.SEARCH_REPO_INFO,
        payload: {
          request: {
            url: `repos/${owner}/${name}`,
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

export function searchRepoIssues({ name, owner }) {
  return async dispatch => {
    try {
      const data = await dispatch({
        type: types.SEARCH_REPO_ISSUES,
        payload: {
          request: {
            url: `repos/${owner}/${name}/issues`,
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
