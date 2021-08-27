import { types, async } from '~/utils/typesCreator'

export default types(
  ['CLEAR_STATE', 'SET_URL_SEARCH', ...async('SEARCH_REPOS')],
  'HOME'
)
