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
        {homePageImages
          // .sort(({id: previousID}, {id: currentID}) => previousID - currentID)
          .map(homePageImage => {
            if (!homePageImage.description) {
              return (
                <div className="homePageImagesGridItem" key={homePageImage.id}>
                  <img src={homePageImage.imageUrl} />
                </div>
              )
            }
            return (
              <div className="homePageImagesGridItem" key={homePageImage.id}>
                <img src={homePageImage.imageUrl} />
                <div className="homePageDescription">
                  <span>{homePageImage.description}</span>
                </div>
              </div>
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
