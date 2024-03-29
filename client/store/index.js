import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import homePageImagesReducer from './homePageImages'
import locationsReducer from './locations'
import menusReducer from './menus'
import privateEventsReducer from './privateEvents'
import happeningsReducer from './happenings'
import usersReducer from './users'
import singleHomePageImageReducer from './singleHomePageImage'
import singleMenuReducer from './singleMenu'

const reducer = combineReducers({
  user,
  users: usersReducer,
  homePageImages: homePageImagesReducer,
  homePageImage: singleHomePageImageReducer,
  locations: locationsReducer,
  menus: menusReducer,
  menu: singleMenuReducer,
  privateEvents: privateEventsReducer,
  happenings: happeningsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
