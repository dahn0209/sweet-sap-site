import React from 'React'
import {createHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'
import './addNewHomeImage.css'
import axios from 'axios'

const defaultState = {
  imageUrl: '',
  imageUrlPath: '',
  description: ''
}

class AddHomePageImageForm extends React.Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let eachFile = event.target.files[0]
    this.setState({
      imageUrl: eachFile,
      imageUrlPath: event.target.value
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
    let {imageUrl, description, imageUrlPath} = this.state
    console.log('imageUrl in add=>', imageUrl)
    console.log('description in add=>', description)
    const fd = new FormData()
    fd.append('imageUrl', imageUrl, imageUrl.name)
    fd.append('imageUrlPath', imageUrlPath)
    fd.append('description', this.state.description)

    console.log('after add description=>', description)
    await axios.post('/api/homePageImages', fd)
    await this.props.createHomePageImage({...this.state})
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path)
    // alert("The image has loaded!!!!")
  }

  render() {
    const {description, imageUrlPath} = this.state

    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">New Image Detail</h2>
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
              <b>Image Path</b>
            </label>
            <input
              type="text"
              name="imageUrlPath"
              value={imageUrlPath}
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
              Add Image
            </button>
          </div>
        </form>
      </section>
    )
  }
}

const mapState = state => {
  return {
    newProduct: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    createHomePageImage: homePageImage =>
      dispatch(createHomePageImage(homePageImage))
  }
}

export default connect(mapState, mapDispatch)(AddHomePageImageForm)
