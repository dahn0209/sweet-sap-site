import React from 'React'
import {createHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'

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
  }

  render() {
    const {imageUrl, description} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>New Image Details</h1>

          <label htmlFor="imageUrl">Image</label>
          <input
            type="file"
            name="imageUrl"
            value={imageUrl}
            placeholder="imageUrl"
            accept="image/*"
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={description}
            placeholder="Product Description"
            onChange={this.handleChange}
          />
          <button type="submit">Add Image</button>
        </form>
      </div>
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
