import React from 'react'
import {fetchMenus} from '../store/menus'
import {connect} from 'react-redux'
import './menus.css'

class Menus extends React.Component {
  componentDidMount() {
    this.props.getMenus()
  }

  render() {
    const menus = this.props.menus
    console.log('menus==>', menus)
    return (
      <section className="menuContainer">
        {menus.map(eachMenu => {
          return (
            <div key={eachMenu.id}>
              <span>{eachMenu.description}</span>
              <img className="menuGridItem" src={eachMenu.imageUrl} />
            </div>
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

export default connect(mapState, mapDispatch)(Menus)
