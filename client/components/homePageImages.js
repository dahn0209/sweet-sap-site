import React from 'react'
import {fetchHomepageImages} from '../store/homePageImages'
import {connect} from 'react-redux'
import './homePageImages.css'

class HomePageImages extends React.Component {
  componentDidMount() {
    this.props.getHomepageImages()
  }

  render() {
    const homePageImages = this.props.homePageImages
    return (
      <section className="homePageImagesContainer">
        {homePageImages.map(homePageImage => {
          return (
            <img
              key={homePageImage.id}
              className="homePageImagesGridItem"
              src={homePageImage.imageUrl}
            />
          )
        })}
      </section>
    )
  }
}

const mapState = state => {
  return {
    homePageImages: state.homePageImages
  }
}

const mapDispatch = dispatch => {
  return {
    getHomepageImages: () => {
      return dispatch(fetchHomepageImages())
    }
  }
}

export default connect(mapState, mapDispatch)(HomePageImages)
