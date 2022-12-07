import axios from 'axios'

const initialState = {}

const SET_SINGLE_HOMEPAGEIMAGE = 'SET_SINGLE_HOMEPAGEIMAGE'

export const setSingleHomePageImage = homePageImage => {
  return {
    type: SET_SINGLE_HOMEPAGEIMAGE,
    homePageImage
  }
}

export const fetchSingleHomePageImage = id => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/homePageImages/${id}`)
      console.log('this data in fetch singe=>', data)

      dispatch(setSingleHomePageImage(data))
    } catch (err) {
      throw err
    }
  }
}

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
