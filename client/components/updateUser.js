import React from 'react'
import {fetchUpdateUser} from '../store/users'
import {connect} from 'react-redux'
import './updateUser.css'

export class UpdateUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    if (this.props.user.id) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        address: this.props.user.address,
        email: this.props.user.email,
        password: this.props.user.password
      })
    }
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.user.id && this.props.user.id) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        address: this.props.user.address,
        email: this.props.user.email,
        password: this.props.user.password
      })
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit() {
    await this.props.fetchUpdateUser({
      ...this.props.user,
      ...this.state
    })
  }
  render() {
    return (
      <section className="updateUserSection">
        <h2 className="updateUserTitle">Update Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="updateUserContainer">
            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div className="updateUserContainer">
            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>

          <div className="updateUserContainer">
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>

          <div className="updateUserContainer">
            <label htmlFor="email">
              <b>E-mail</b>
            </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="updateUserContainer">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              name="password"
              type="password"
              //   value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" value="Submit" className="updateUserSubmit">
            Submit
          </button>
        </form>
      </section>
    )
  }
}
const mapState = state => {
  return {user: state.user}
}
const mapDispatch = dispatch => {
  return {
    fetchUpdateUser: state => {
      return dispatch(fetchUpdateUser(state))
    }
  }
}

export default connect(mapState, mapDispatch)(UpdateUser)
