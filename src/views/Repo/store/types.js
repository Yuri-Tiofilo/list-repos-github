import { types, async } from '~/utils/typesCreator'

export default types(
  ['CLEAR_STATE', ...async('SEARCH_REPO_INFO'), ...async('SEARCH_REPO_ISSUES')],
  'DETAILS'
)
