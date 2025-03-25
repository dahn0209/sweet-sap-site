import React from 'React'
import {createHomePageImage, fetchHomepageImages} from '../store/homePageImages'
import {connect} from 'react-redux'
import './addNewHomeImage.css'
import axios from 'axios'

const defaultState = {
  // id:0,
  imageUrl: '',
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

  componentDidMount() {
    this.props.fetchHomePageImages() //////fetching all homepage image data from
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
    await axios.post('/api/homePageImages', fd)
    await this.props.createHomePageImage({...this.state})
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path) ////takes you back to edit-home
  }

  render() {
    const {description} = this.state
    console.log('this.props=>', this.props)
    // console.log('prop homepageImages->',this.props.homePageImages.length)
    console.log('this.state in add render=>', this.state)

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
    // homePageImages: state.homePageImages,
    newHomePageImage: state.homePageImages
  }
}

const mapDispatch = dispatch => {
  return {
    fetchHomePageImages: () => dispatch(fetchHomepageImages()),
    createHomePageImage: homePageImage =>
      dispatch(createHomePageImage(homePageImage))
  }
}

export default connect(mapState, mapDispatch)(AddHomePageImageForm)
