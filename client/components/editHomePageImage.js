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

    // this.handleChange = this.handleChange.bind(this)
    // this.handleChangeDescription = this.handleChangeDescription.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    const homePageImageId = this.props.match.params.homePageImageId
    await this.props.getSingleHomePageImage(homePageImageId)
    const {imageUrl, description} = this.props.updatedHomePageImage
    console.log('imageUrl in edit=>', imageUrl)
    console.log('description in edit=>', description)
    if (homePageImageId) {
      this.setState({
        imageUrl: imageUrl,
        description: description
      })
    }
    console.log('this state=>', this.state)
  }

  // componentDidUpdate(prevProps) {
  //   const {imageUrl, description, id} = this.props.updatedHomePageImage
  //   if (prevProps.updatedHomePageImageThunk.id !== id) {
  //     this.setState({
  //       imageUrl,
  //       description
  //     })
  //   }
  // }

  // handleChange(event) {
  //   let eachFile = event.target.files[0]
  //   this.setState({
  //     imageUrl: eachFile
  //   })
  // }

  // handleChangeDescription(event) {
  //   this.setState({
  //     description: event.target.value
  //   })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   this.props.updateHomepageImageThunk({
  //     ...this.props.updatedHomePageImage,
  //     ...this.state
  //   })
  // }

  render() {
    console.log('let look at state=>', this.state)
    console.log('updatedHomePageImage at prop', this.props.updatedHomePageImage)
    const {imageUrl, description} = this.state
    const propImageUrl = this.props.updatedHomePageImage.imageUrl
    console.log('imageUrl render=>', imageUrl)
    console.log('description render=>', description)

    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">Edit Image Detail</h2>

        <div className="editHomePageImagesGridItem">
          <img src={imageUrl} />
          <div className="editHomePageImagesDescription">
            <span>{description}</span>
          </div>
        </div>

        {/* <form
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
        </form> */}
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
    getSingleHomePageImage: homePageImageId =>
      dispatch(fetchSingleHomePageImage(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  EditHomePageImageForm
)