import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import './auth-form2.css'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  if (displayName === 'Sign Up') {
    return (
      <section className="signUpSection">
        <h2 className="signUpTitle">Sign Up Form</h2>
        <form onSubmit={handleSubmit} name={name} className=".signUpForm">
          <div className="signUpContainer">
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input name="firstName" type="text" required />
          </div>

          <div className="signUpContainer">
            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input name="lastName" type="text" required />
          </div>

          <div className="signUpContainer">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input name="password" type="password" required />
          </div>

          <div className="signUpContainer">
            <button type="submit" className="signUpSubmit">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        {/* <a href="/auth/google">{displayName} with Google</a> */}
      </section>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.user.error
//   }
// }

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const firstName = evt.target.firstName
      const lastName = evt.target.lastName
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, firstName, lastName))
    }
  }
}

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
