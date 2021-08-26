import { types, async } from '~/utils/typesCreator'

export default types(['CLEAR_STATE', ...async('SEARCH_MOVIES')], 'HOME')
