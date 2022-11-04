import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_LOCATIONS = 'SET_LOCATIONS'

/**
 * ACTION CREATORS
 */

export const setLocations = locations => {
  return {
    type: SET_LOCATIONS,
    locations
  }
}

/**
 * THUNK CREATORS
 */

export const fetchLocations = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/locations')
    console.log('data locations THunk==>', data)
    dispatch(setLocations(data))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

/**
 * REDUCER
 */

const initialState = []

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.locations
    default:
      return state
  }
}
