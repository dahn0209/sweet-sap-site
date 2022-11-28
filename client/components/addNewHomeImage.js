import React from 'React'
import {createHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'
import './addNewHomeImage.css'
import axios from 'axios'

const defaultState = {
  imageFile: null,
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
      imageFile: eachFile,
      imageUrl: `./newHomeImages/${eachFile.name}`
    })
  }

  handleChangeDescription(event) {
    console.log('event.target.value in description=>', event.target.value)
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit(event) {
    // console.log('this.state.imageFile in submit->', this.state.imageFile)
    event.preventDefault()
    const fd = new FormData()
    fd.append('imageFile', this.state.imageFile, this.state.imageFile.name)
    axios.post('http://localhost:8080/newHomeImages', fd).then(res => {
      console.log('res->', res)
    })

    this.props.createHomePageImage({...this.state})
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path)
  }

  render() {
    const {imageUrl, description} = this.state
    console.log('this.state=>', this.state)
    // console.log('this.state.imageFile=>', this.state.imageFile)
    console.log('this.state.imageUrl=>', this.state.imageUrl)
    console.log('this.state.description=>', this.state.description)
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
              // value={imageUrl}
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
