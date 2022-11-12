import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PRIVATEEVENTS = 'SET_PRIVATEEVENTS'

/**
 * ACTION CREATORS
 */

export const setPrivateEvents = privateEvents => {
  return {
    type: SET_PRIVATEEVENTS,
    privateEvents
  }
}

/**
 * THUNK CREATORS
 */

export const fetchPrivateEvents = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/privateEvents')
    console.log('data in privateEvents THunk==>', data)
    dispatch(setPrivateEvents(data))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

/**
 * REDUCER
 */

const initialState = []

export default function privateEventsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRIVATEEVENTS:
      return action.privateEvents
    default:
      return state
  }
}
