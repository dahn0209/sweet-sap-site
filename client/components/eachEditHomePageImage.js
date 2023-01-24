import React from 'react'
import {deleteHomePageImageThunk} from '../store/homePageImages'
// import {Draggable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './editHome.css'

export class EachEditHomePageImage extends React.Component {
  render() {
    const homePageImage = this.props.homePageImage

    if (!homePageImage.description) {
      return (
        <div className="editHomePageImagesGridItem" key={homePageImage.id}>
          <img src={homePageImage.imageUrl} />
          <div className="editHomePageImagesEditDelete">
            <Link to={`/homePageImages/${homePageImage.id}/edit`}>
              <button type="button">Edit</button>
            </Link>
            <button
              id="deleteBtn"
              type="button"
              onClick={() => this.props.deleteHomePageImageThunk(homePageImage)}
            >
              Delete
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
            onClick={() => this.props.deleteHomePageImageThunk(homePageImage)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteHomePageImageThunk: homePageImageId =>
      dispatch(deleteHomePageImageThunk(homePageImageId))
  }
}

export default connect(null, mapDispatchToProps)(EachEditHomePageImage)
