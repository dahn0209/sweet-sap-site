import React from 'react'
import {deleteMenuThunk} from '../store/menus'
// import {Draggable} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './editHome.css'

export class EachEditMenu extends React.Component {
  render() {
    const eachMenu = this.props.eachMenu

    return (
      <figure key={eachMenu.id} className="eachMenu">
        <span className="description">{eachMenu.description}</span>
        <br />
        <img className="menuGridItem" src={eachMenu.imageUrl} />
        <div className="editHomePageImagesEditDelete">
          <Link to={`/homePageImages/${eachMenu.id}/edit`}>
            <button type="button">Edit</button>
          </Link>
          <button
            type="button"
            id="deleteBtn"
            onClick={() => this.props.deleteMenuThunk(eachMenu)}
          >
            Delete
          </button>
        </div>
      </figure>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMenuThunk: eachMenuId => dispatch(deleteMenuThunk(eachMenuId))
  }
}

export default connect(null, mapDispatchToProps)(EachEditMenu)
