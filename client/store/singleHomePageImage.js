import axios from 'axios'
// Initial State
// This sets up the default state for this reducer.
// Part of Redux state management.
const initialState = {}

//ACTION TYPE
//A constant representing the type of action that will be dispatched.
const SET_SINGLE_HOMEPAGEIMAGE = 'SET_SINGLE_HOMEPAGEIMAGE'

export const setSingleHomePageImage = homePageImage => {
  return {
    type: SET_SINGLE_HOMEPAGEIMAGE,
    homePageImage
  }
}

// Thunk (Async Action Creator)
// This is a thunk, enabled by redux-thunk middleware.
// It allows for asynchronous logic (like API calls) before dispatching a regular action.
// Part of Redux async middleware.
export const fetchSingleHomePageImage = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/homePageImages/${id}`)
      console.log('this data in fetch single=>', data)

      dispatch(setSingleHomePageImage(data))
    } catch (err) {
      throw err
    }
  }
}
//Reducer
// This function receives actions and updates the Redux state accordingly.

// Part of Redux reducers.
export default function singleHomePageImageReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case SET_SINGLE_HOMEPAGEIMAGE:
      return action.homePageImage
    default:
      return state
  }
}

// Component or another piece of code calls fetchSingleHomePageImage(id).

// Inside the thunk, it does an Axios GET request.

// On success, it dispatches setSingleHomePageImage(data).

// The reducer handles the action and updates the state.

// Let me know if you want to see how this connects to a React component!
