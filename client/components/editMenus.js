import React from 'react'
import {fetchMenus} from '../store/menus'
import {connect} from 'react-redux'
import './menus.css'

class EditMenus extends React.Component {
  componentDidMount() {
    this.props.getMenus()
  }

  render() {
    const menus = this.props.menus
    return (
      <section className="menuContainer">
        {menus.map(eachMenu => {
          return (
            <figure key={eachMenu.id} className="eachMenu">
              <span className="description">{eachMenu.description}</span>
              <br />
              <img className="menuGridItem" src={eachMenu.imageUrl} />
            </figure>
          )
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
