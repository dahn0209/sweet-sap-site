import React from 'React'
import {connect} from 'react-redux'
import {fetchMenus, createMenu} from '../store/menus'
import './addNewHomeImage.css'
import axios from 'axios'

const defaultState = {
  imageUrl: '',
  description: ''
}

class AddNewMenuForm extends React.Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getMenus()
  }

  handleChange(event) {
    let eachFile = event.target.files[0]
    console.log('event.target.file->', event.target.files)
    console.log('eachFile=>', eachFile)
    this.setState({
      imageUrl: eachFile
    })
  }

  handleChangeDescription(event) {
    console.log('event.target.value in description=>', event.target.value)
    this.setState({
      description: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    let {imageUrl, description} = this.state
    console.log('imageUrl in add=>', imageUrl)
    console.log('description in add=>', description)

    const fd = new FormData()
    // fd.append('imageUrl', imageUrl, imageUrl.name)
    fd.append('imageUrl', imageUrl)
    fd.append('description', this.state.description)
    console.log('this.state after submit->', this.state)
    console.log('after add description=>', description)
    await axios.post('/api/menus', fd)
    await this.props.createMenu({...this.state})
    this.setState(defaultState)
    let path = '/edit-menu'
    this.props.history.push(path)
  }

  render() {
    const {description} = this.state
    console.log('this.props=>', this.props)
    console.log('this.state in add render=>', this.state)

    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">New Menu Detail</h2>
        <form
          onSubmit={this.handleSubmit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="addNewHomeImageContainer">
            <label htmlFor="imageUrl">
              <b>Image</b>
            </label>
            <input
              type="file"
              name="imageUrl"
              placeholder="imageUrl"
              accept="image/*"
              onChange={this.handleChange}
            />
          </div>

          <div className="addNewHomeImageContainer">
            <label htmlFor="description">
              <b>Description</b>
            </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.handleChangeDescription}
            />
          </div>

          <div className="addNewHomeImageContainer">
            <button className="addNewHomeImageSubmit" type="submit">
              Add Menu
            </button>
          </div>
        </form>
      </section>
    )
  }
}

const mapState = state => {
  return {
    newMenu: state.menus
  }
}

const mapDispatch = dispatch => {
  return {
    getMenus: () => {
      return dispatch(fetchMenus())
    },
    createMenu: menu => dispatch(createMenu(menu))
  }
}

export default connect(mapState, mapDispatch)(AddNewMenuForm)
