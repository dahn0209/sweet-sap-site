import React from 'react'
import {
  fetchHomepageImages,
  deleteHomePageImageThunk
} from '../store/homePageImages'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import AddProductForm from './AddProductForm'
import './editHome.css'

export class EditHome extends React.Component {
  componentDidMount() {
    this.props.fetchHomePageImages()
  }

  render() {
    const homePageImages = this.props.homePageImages
    return (
      <section className="editHomePageImagesContainer">
        {homePageImages.map(homePageImage => {
          if (!homePageImage.description) {
            return (
              <div
                className="editHomePageImagesGridItem"
                key={homePageImage.id}
              >
                <img src={homePageImage.imageUrl} />
                <div className="editHomePageImagesEditDelete">
                  <Link to={`/homePageImages/${homePageImage.id}/edit`}>
                    <button type="button">Edit</button>
                  </Link>
                  <button
                    id="deleteBtn"
                    type="button"
                    onClick={() =>
                      this.props.deleteHomePageImageThunk(homePageImage)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          }
          return (
            <div className="editHomePageImagesGridItem" key={homePageImage.id}>
              <img src={homePageImage.imageUrl} />
              <div className="editHomePageImagesDescription">
                <span>{homePageImage.description}</span>
              </div>
              <div className="editHomePageImagesEditDelete">
                <Link to={`/homePageImages/${homePageImage.id}/edit`}>
                  <button type="button">Edit</button>
                </Link>
                <button
                  type="button"
                  id="deleteBtn"
                  onClick={() =>
                    this.props.deleteHomePageImageThunk(homePageImage)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          )
        })}
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
    fetchHomePageImages: () => dispatch(fetchHomepageImages()),
    deleteHomePageImageThunk: homePageImageId =>
      dispatch(deleteHomePageImageThunk(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHome)
