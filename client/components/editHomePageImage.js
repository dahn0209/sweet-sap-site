import React from 'react'
import {updateHomePageImageThunk} from '../store/homePageImages'
import {connect} from 'react-redux'
import {fetchSingleHomePageImage} from '../store/singleHomePageImage'
import axios from 'axios'
const defaultState = {
  imageUrl: '',
  description: ''
}

class EditHomePageImageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const homePageImageId = this.props.match.params.homePageImageId
    this.props.getSingleHomePageImage(homePageImageId)
    const {imageUrl, description, id} = this.props.homePageImage
    console.log('this is id in edit=>', id)
    console.log('description in edit=>', description)
    if (homePageImageId) {
      this.setState({
        imageUrl: imageUrl,
        description: description
      })
    }
    console.log('this state=>', this.state)
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps in update=>', prevProps)
    console.log('prevProps.update dee in update=>', prevProps.homePageImage)

    const {imageUrl, description, id} = this.props.homePageImage
    console.log('update imageUrl=>', imageUrl)
    console.log('update description=>', description)
    console.log('update id=>', id)

    if (prevProps.homePageImage.id !== id) {
      this.setState({
        imageUrl: imageUrl,
        description: description
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
    let {imageUrl, description, id} = this.state
    console.log('submit imageUrl=>', imageUrl)
    console.log('submit id ', description)
    const fd = new FormData()
    fd.append('imageUrl', imageUrl, imageUrl.name)
    fd.append('description', description)
    axios.put(`/api/homePageImages/${id}`, fd)
    console.log('submit state=>', this.state)
    this.props.updateHomePageImageThunk({
      ...this.props.homePageImage,
      ...this.state
    })
  }

  render() {
    console.log('let look at state=>', this.state)
    console.log('updatedHomePageImage at prop', this.props.homePageImage)
    const {imageUrl, description} = this.state
    console.log('imageUrl render=>', imageUrl)
    console.log('description render=>', description)
    return (
      <section className="addNewHomeImageSection">
        <h2 className="addNewHomeImageTitle">Edit Image Detail</h2>
        <form
          onSubmit={this.handleSubmit}
          method="put"
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
              placeholder="Description"
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
    homePageImage: state.homePageImage
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
