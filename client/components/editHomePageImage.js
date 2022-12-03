import React from 'react'
import {updateHomePageImageThunk} from '../store/homePageImages'
import {connect} from 'react-redux'
import {fetchSingleHomePageImage} from '../store/singleHomePageImage'

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
    const homePageImageId = this.props.match.params.homePageImageId
    this.props.fetchSingleHomePageImage(homePageImageId)
    const {imageUrl, description} = this.props.updatedHomepageImage
    // if (homePageImageId) {
    //   this.setState({
    //     imageUrl,
    //     description
    //   })
    // }
  }

  componentDidUpdate(prevProps) {
    const {imageUrl, description, id} = this.props.updatedHomePageImage
    if (prevProps.updatedHomePageImageThunk.id !== id) {
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
      ...this.props.updatedHomePageImage,
      ...this.state
    })
  }

  render() {
    const {imageUrl, description} = this.state
    console.log('imageUrl=>', imageUrl)
    console.log('description=>', description)
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
    updatedHomePageImage: state.homePageImage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateHomePageImageThunk: homePageImage =>
      dispatch(updateHomePageImageThunk(homePageImage)),
    fetchSingleHomePageImage: homePageImageId =>
      dispatch(fetchSingleHomePageImage(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  EditHomePageImageForm
)
