import React from 'react'
import {
  fetchHomepageImages,
  deleteHomePageImageThunk
} from '../store/homePageImages'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './editHome.css'

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
          {homePageImages
            .sort(({id: previousID}, {id: currentID}) => previousID - currentID)
            .map(homePageImage => {
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
                        Delete
                      </button>
                    </div>
                  </div>
                )
              }
              return (
                <div
                  className="editHomePageImagesGridItem"
                  key={homePageImage.id}
                >
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
                      Delete
                    </button>
                  </div>
                </div>
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
    fetchHomePageImages: () => dispatch(fetchHomepageImages()),
    deleteHomePageImageThunk: homePageImageId =>
      dispatch(deleteHomePageImageThunk(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHome)
