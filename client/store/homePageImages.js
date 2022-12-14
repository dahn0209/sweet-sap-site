import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_HOMEPAGEIMAGES = 'SET_HOMEPAGEIMAGES'
const CREATE_HOMEPAGEIMAGE = 'CREATE_HOMEPAGEIMAGE'
const DELETE_HOMEPAGEIMAGE = 'DELETE_HOMEPAGEIMAGE'
const UPDATE_HOMEPAGEIMAGE = 'UPDATE_HOMEPAGEIMAGE'

/**
 * ACTION CREATORS
 */

export const setHomepageImages = homePageImages => {
  return {
    type: SET_HOMEPAGEIMAGES,
    homePageImages
  }
}

export const createHomePageImage = homePageImage => {
  return {
    type: CREATE_HOMEPAGEIMAGE,
    homePageImage
  }
}

export const deleteHomePageImage = homePageImage => {
  return {
    type: DELETE_HOMEPAGEIMAGE,
    homePageImage
  }
}

export const updateHomePageImage = homePageImage => {
  return {
    type: UPDATE_HOMEPAGEIMAGE,
    homePageImage
  }
}

/**
 * THUNK CREATORS
 */

export const fetchHomepageImages = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/homePageImages')
    dispatch(setHomepageImages(data))
  }
}

export const createNewHomePageImage = homePageImage => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/homePageImages', homePageImage)
      const newhomePageImage = response.data
      console.log('newHomePageImage store thunk==>', newhomePageImage)
      dispatch(createHomePageImage(newhomePageImage))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteHomePageImageThunk = homePageImage => {
  console.log('homePageDelete=>', homePageImage)
  return async dispatch => {
    try {
      await axios.delete(`/api/homePageImages/${homePageImage.id}`)
      dispatch(deleteHomePageImage(homePageImage))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateHomePageImageThunk = homePageImage => {
  return async dispatch => {
    try {
      const response = await axios.put(
        `/api/homePageImages/${homePageImage.id}`,
        homePageImage
      )
      const updatedHomePageImage = response.data
      console.log('response in update Redux=>', response)
      console.log(
        'updatedHomePageImage in Redux update=>',
        updatedHomePageImage
      )
      dispatch(updateHomePageImage(updatedHomePageImage))
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

export default function homePageImagesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOMEPAGEIMAGES:
      return action.homePageImages
    case CREATE_HOMEPAGEIMAGE:
      return [...state, action.homePageImage]
    case DELETE_HOMEPAGEIMAGE:
      return state.filter(
        homePageImage => homePageImage.id !== action.homePageImage.id
      )
    case UPDATE_HOMEPAGEIMAGE:
      return state.map(homePageImage => {
        return homePageImage.id === action.homePageImage.id
          ? action.homePageImage
          : homePageImage
      })
    default:
      return state
  }
}
