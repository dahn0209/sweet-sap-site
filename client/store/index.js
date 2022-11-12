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
const reducer = combineReducers({
  user,
  homePageImages: homePageImagesReducer,
  locations: locationsReducer,
  menus: menusReducer,
  privateEvents: privateEventsReducer,
  happenings: happeningsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
