import axios from 'axios'

const initialState = {}

const SET_SINGLE_HOMEPAGEIMAGE = 'SET_SINGLE_HOMEPAGEIMAGE'

export const setSingleHomepageImage = homePageImage => {
  return {
    type: SET_SINGLE_HOMEPAGEIMAGE,
    homePageImage
  }
}

export const fetchSingleHomepageImage = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/homePageImages/${id}`)

      dispatch(setSingleHomepageImage(data))
    } catch (err) {
      throw err
    }
  }
}

export default function singleHomepageImageReducer(
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
