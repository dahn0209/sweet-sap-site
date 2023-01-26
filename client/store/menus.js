import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_MENUS = 'SET_MENUS'
const CREATE_MENU = 'CREATE_MENU'
const DELETE_MENU = 'DELETE_MENU'
const UPDATE_MENU = 'UPDATE_MENU'

/**
 * ACTION CREATORS
 */

export const setMenus = menus => {
  return {
    type: SET_MENUS,
    menus
  }
}

export const createMenu = menu => {
  return {
    type: CREATE_MENU,
    menu
  }
}

export const deleteMenu = menu => {
  return {
    type: DELETE_MENU,
    menu
  }
}

export const updateMenu = menu => {
  return {
    type: UPDATE_MENU,
    menu
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

export const createNewMenu = menu => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/menus', menu)
      const newMenu = response.data
      console.log('menu store thunk==>', newMenu)
      dispatch(createMenu(newMenu))
    } catch (error) {
      console.log(error)
    }
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
