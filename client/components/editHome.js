import React from 'react'
import {fetchHomepageImages} from '../store/homePageImages'
// import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './editHome.css'
import EachEditHomePageImage from './eachEditHomePageImage'

export class EditHome extends React.Component {
  componentDidMount() {
    this.props.fetchHomePageImages()
  }

  render() {
    const homePageImages = this.props.homePageImages
    if (!homePageImages.length) {
      return (
        <section>
          <div className="addNewButton">
            <Link to="/add-homepage-image">
              <button type="button">Add New Image </button>
            </Link>
          </div>
          <div id="noImagePresentEditHomeImages">
            <h1>No Images Present! Add New Images Now!</h1>
          </div>
        </section>
      )
    }

    return (
      <section>
        <div className="addNewButton">
          <Link to="/add-homepage-image">
            <button type="button">Add New Image </button>
          </Link>
        </div>
        <div className="editHomePageImagesContainer">
          {homePageImages.map(homePageImage => {
            return (
              <EachEditHomePageImage
                key={homePageImage.id}
                homePageImage={homePageImage}
              />
            )
          })}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    homePageImages: state.homePageImages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHomePageImages: () => dispatch(fetchHomepageImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHome)
