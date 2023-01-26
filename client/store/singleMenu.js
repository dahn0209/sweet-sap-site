import axios from 'axios'

const initialState = {}

const SET_SINGLE_MENU = 'SET_SINGLE_MENU'

export const setSingleMenu = menu => {
  return {
    type: SET_SINGLE_MENU,
    menu
  }
}

export const fetchSingleMenu = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/menus/${id}`)
      console.log('this data in fetch single menu=>', data)

      dispatch(setSingleMenu(data))
    } catch (err) {
      throw err
    }
  }
}

export default function singleMenuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_MENU:
      return action.menu
    default:
      return state
  }
}
