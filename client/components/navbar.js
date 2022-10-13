import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
// import styles from '../components/navbar.module.css'

const Navbar = ({handleClick, isLoggedIn}) => (
  <header>
    <h1>BOILERMAKER</h1>
    {isLoggedIn ? (
      <nav>
        {/* The navbar will show these links after you log in */}
        <div className="navItem">
          {/* <a> */}
          <Link to="/home">Home</Link>
          {/* </a> */}
        </div>
        <div className="navItem">
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      </nav>
    ) : (
      <nav>
        {/* The navbar will show these links before you log in */}
        <div className="navItem">
          {/* <a> */}
          <Link to="/login">Login</Link>
          {/* </a> */}
        </div>
        <div className="navItem">
          {/* <a> */}
          <Link to="/signup">Sign Up</Link>
          {/* </a> */}
        </div>
      </nav>
    )}

    <hr />
  </header>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
