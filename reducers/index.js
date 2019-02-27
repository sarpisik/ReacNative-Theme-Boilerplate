import { combineReducers } from 'redux'
import themeReducer from './theme'

const rootReducer = combineReducers({
  themeState: themeReducer
})

export default rootReducer
