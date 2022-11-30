import React from 'React'
import {createHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'
import './addNewHomeImage.css'
import axios from 'axios'

const defaultState = {
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

  handleChange(event) {
    let eachFile = event.target.files[0]
    this.setState({
      // imageUrl: `./newHomeImages/${eachFile.name}`;
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
    // console.log('this.state.imageFile in submit->', this.state.imageFile)
    const fd = await new FormData()
    fd.append('imageUrl', this.state.imageUrl, this.state.imageUrl.name)
    fd.append('description', this.state.description)
    axios
      .post('/api/homePageImages', fd)
      .then(res => {
        console.log('res->', res)
      })
      .then(body => {
        console.log('body=>', body)
        this.setState({
          imageUrl: `./homePage/${this.state.imageUrl.name}`
        })
      })
    await this.props.createHomePageImage({...this.state})
    event.preventDefault()
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path)
    // alert("The image has loaded!!!!")
  }

  render() {
    const {description} = this.state

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
            <br />
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
              placeholder="Product Description"
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
