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
    console.log('homePageImagesCOmponent==>', homePageImages)
    return (
      <section>
        DEEEEEE!!!
        <div id="homePageImages-wrapper">
          {homePageImages.map(homePageImage => {
            return (
              <div className="homePageImages-list" key={homePageImage.id}>
                <div className="homePageImages-item">
                  <img src={homePageImage.imageUrl} />
                </div>
              </div>
            )
          })}
        </div>
        <div />
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
