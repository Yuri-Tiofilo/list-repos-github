import { combineReducers } from 'redux'

import home from '../views/Home/store/reducer'
import details from '../views/Repo/store/reducer'

export default combineReducers({
  home,
  details
})
