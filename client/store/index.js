import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import homePageImagesReducer from './homePageImages'
import locationsReducer from './locations'
import menusReducer from './menus'

const reducer = combineReducers({
  user,
  homePageImages: homePageImagesReducer,
  locations: locationsReducer,
  menus: menusReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
