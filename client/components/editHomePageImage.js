import React from 'react'
import {updateHomepageImageThunk} from '../store/homePageImages'
import {connect} from 'react-redux'
import {fetchSingleHomepageImage} from '../store/singleHomePageImage'

const defaultState = {
  imageUrl: '',
  description: ''
}

class EditHomePageImageForm extends React.Component {
  constructor() {
    super()
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    const homepageImageId = this.props.match.params.homepageImageId
    this.props.fetchSingleHomepageImage(homepageImageId)
    const {imageUrl, description} = this.props.updatedHomepageImage
    if (homepageImageId) {
      this.setState({
        imageUrl,
        description
      })
    }
  }

  componentDidUpdate(prevProps) {
    const {imageUrl, description, id} = this.props.updatedHomepageImage
    if (prevProps.updatedHomepageImage.id !== id) {
      this.setState({
        imageUrl,
        description
      })
    }
  }

  handleChange(event) {
    let eachFile = event.target.files[0]
    this.setState({
      imageUrl: eachFile
    })
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.updateHomepageImageThunk({
      ...this.props.updatedHomepageImage,
      ...this.state
    })
  }

  render() {
    const {description} = this.state
    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">Edit Image Detail</h2>
        {/* <div>
          <h3>THIS INFORMATION WILL BE SAVED UPON SUBMIT:</h3>
          <p>Name: {name}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
        </div> */}
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
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    updatedHomepageImage: state.homepageImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHomepageImageThunk: homepageImage =>
      dispatch(updateHomepageImageThunk(homepageImage)),
    fetchSingleHomepageImage: homepageImageId =>
      dispatch(fetchSingleHomepageImage(homepageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  EditHomePageImageForm
)
