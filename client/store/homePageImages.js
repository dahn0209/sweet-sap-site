import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_HOMEPAGEIMAGES = 'SET_HOMEPAGEIMAGES'

/**
 * ACTION CREATORS
 */

export const setHomepageImages = homePageImages => {
  return {
    type: SET_HOMEPAGEIMAGES,
    homePageImages
  }
}

/**
 * THUNK CREATORS
 */

export const fetchHomepageImages = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/homePageImages')
    console.log('data in homePageImages THunk==>', data)
    dispatch(setHomepageImages(data))
  }
}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers

/**
 * REDUCER
 */

const initialState = []

export default function homePageImagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOMEPAGEIMAGES:
      return action.homePageImages
    default:
      return state
  }
}
