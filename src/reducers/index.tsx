import { combineReducers } from 'redux'
import todos from './todos'
import actualSlide from './actualSlide'
import listFilter from './listFilter'

export default combineReducers({
  todos,
  actualSlide,
  listFilter
})