import React from 'react'
import {fetchMenus} from '../store/menus'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './menus.css'
import EachEditMenu from './eachEditMenu'

class EditMenus extends React.Component {
  componentDidMount() {
    this.props.getMenus()
  }

  render() {
    const menus = this.props.menus

    if (!menus.length) {
      return (
        <section>
          <div className="addNewButton">
            <Link to="/add-menu">
              <button type="button">Add New Menu </button>
            </Link>
          </div>
          <div id="noImagePresentEditHomeImages">
            <h1>No Menu Present! Add New Menu Now!</h1>
          </div>
        </section>
      )
    }
    return (
      <section className="menuContainer">
        <div className="addNewButton">
          <Link to="/add-menu">
            <button type="button">Add Menu</button>
          </Link>
        </div>
        {menus.map(eachMenu => {
          return <EachEditMenu key={eachMenu.id} eachMenu={eachMenu} />
        })}
      </section>
    )
  }
}

const mapState = state => {
  return {
    menus: state.menus
  }
}

const mapDispatch = dispatch => {
  return {
    getMenus: () => {
      return dispatch(fetchMenus())
    }
  }
}

export default connect(mapState, mapDispatch)(EditMenus)
