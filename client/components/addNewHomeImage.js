import React from 'React'
import {createHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'
import './addNewHomeImage.css'

const defaultState = {
  imageUrl: '',
  description: ''
}

class AddHomePageImageForm extends React.Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.createHomePageImage({...this.state})
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path)
  }

  render() {
    const {imageUrl, description} = this.state
    console.log('history==>', this.props.history)
    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">New Image Detail</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="addNewHomeImageContainer">
            <label htmlFor="imageUrl">
              <b>Image</b>
            </label>
            <br />
            <input
              type="file"
              name="imageUrl"
              value={imageUrl}
              placeholder="imageUrl"
              accept=".webp"
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
              onChange={this.handleChange}
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
