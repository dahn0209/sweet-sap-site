import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_HAPPENINGS = 'SET_HAPPENINGS'

/**
 * ACTION CREATORS
 */

export const setHappenings = happenings => {
  return {
    type: SET_HAPPENINGS,
    happenings
  }
}

/**
 * THUNK CREATORS
 */

export const fetchHappenings = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/happenings')
    console.log('data in happenings THunk==>', data)
    dispatch(setHappenings(data))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

/**
 * REDUCER
 */

const initialState = []

export default function happeningsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HAPPENINGS:
      return action.happenings
    default:
      return state
  }
}
