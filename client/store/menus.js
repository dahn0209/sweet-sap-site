import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_MENUS = 'SET_MENUS'

/**
 * ACTION CREATORS
 */

export const setMenus = menus => {
  return {
    type: SET_MENUS,
    menus
  }
}

/**
 * THUNK CREATORS
 */

export const fetchMenus = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/menus')
    console.log('data in menus THunk==>', data)
    dispatch(setMenus(data))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

/**
 * REDUCER
 */

const initialState = []

export default function menusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MENUS:
      return action.menus
    default:
      return state
  }
}
