import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import './navbar.css'

const Navbar = ({handleClick, isLoggedIn}) => (
  <header>
    <Link to="/">
      <img src="./header_image.webp" />
    </Link>
    <h4>Restaurant & Bar</h4>

    {isLoggedIn ? (
      <nav>
        {/* The navbar will show these links after you log in */}
        <ul>
          <li>
            <Link to="/edit-home">Home</Link>
          </li>
          <li>
            <Link to="/edit-hours-location">Hours & Location</Link>
          </li>
          <li>
            <Link to="/edit-menu">Menu</Link>
          </li>
          <li>
            <Link to="/edit-private-events">Private Events</Link>
          </li>
          <li>
            <Link to="/edit-happening">Happening</Link>
          </li>
          <li>
            <Link to="/edit-contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/update-profile">Update Profile</Link>
          </li>
          <li>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        {/* The navbar will show these links before you log in */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hours-location">Hours & Location</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/private-events">Private Events</Link>
          </li>
          <li>
            <Link to="/happening">Happening</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
          {/* <li>
            <Link to="/signup">Sign Up</Link>
          </li> */}
        </ul>
      </nav>
    )}
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
