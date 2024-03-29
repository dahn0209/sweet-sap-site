import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import HomePageImages from './components/homePageImages'
import HourLocation from './components/hourLocation'
import Menus from './components/menus'
import PrivateEvents from './components/privateEvents'
import Happening from './components/happenings'
import ContactUs from './components/contactUs'
import updateUser from './components/updateUser'
import EditHome from './components/editHome'
import AddHomePageImageForm from './components/addNewHomeImage'
// import editHomePageImage from './components/editHomePageImage'
import EditHomePageImageForm from './components/editHomePageImage'

import EditMenus from './components/editMenus'
import addNewMenu from './components/addNewMenu'
import EditEachMenu from './components/editEachMenu'

import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route path="/edit-home" component={EditHome} />
            <Route path="/edit-menu" component={EditMenus} />
            <Route exact path="/update-profile" component={updateUser} />
            <Route
              exact
              path="/add-homepage-image"
              component={AddHomePageImageForm}
            />
            <Route
              path="/homePageImages/:homePageImageId/edit"
              component={EditHomePageImageForm}
            />
            <Route path="/add-menu" component={addNewMenu} />
            <Route path="/menus/:menuId/edit" component={EditEachMenu} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
        <Route exact path="/" component={HomePageImages} />
        <Route exact path="/hours-location" component={HourLocation} />
        <Route exact path="/menu" component={Menus} />
        <Route exact path="/private-events" component={PrivateEvents} />
        <Route exact path="/happening" component={Happening} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
