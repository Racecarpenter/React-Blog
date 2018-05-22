import { combineReducers } from 'redux'
import Authors from './authors'
import Comments from './comments'
import Posts from './posts'

const rootReducer = combineReducers({
Authors,
Comments,
Posts
})
export default rootReducer
