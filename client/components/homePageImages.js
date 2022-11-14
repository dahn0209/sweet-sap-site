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
          if (!homePageImage.description) {
            return (
              <div
                className="module"
                key={homePageImage.id}
                style={{backgroundImage: `url(${homePageImage.imageUrl})`}}
              />
            )
          } else {
            return (
              <div
                className="module"
                key={homePageImage.id}
                style={{backgroundImage: `url(${homePageImage.imageUrl})`}}
              >
                <h2>{homePageImage.description}</h2>
              </div>
            )
          }
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
