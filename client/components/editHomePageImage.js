import React from 'react'
import {updateHomePageImage} from '../store/homePageImages'
import {connect} from 'react-redux'
import {fetchSingleHomePageImage} from '../store/singleHomePageImage'
import axios from 'axios'
import './editHomePageImage.css'

class EditHomePageImageForm extends React.Component {
  constructor(props) {
    super(props)
    console.log('props in super=>', this.props.homePageImage)
    this.state = {
      imageUrl: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const homePageImageId = this.props.match.params.homePageImageId
    this.props.getSingleHomePageImage(homePageImageId)
    const {imageUrl, description} = this.props.homePageImage
    console.log('description in edit=>', description)
    console.log('imageUrl in edit=>', imageUrl)
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
    console.log('update after updae->', this.state)
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

  async handleSubmit(event) {
    event.preventDefault()
    console.log('submit state all=>', this.state)
    console.log('submit  props=>', this.props.homePageImage)
    let {imageUrl, description} = this.state
    console.log('submit imageUrl=>', imageUrl)
    console.log('sumb description=>', description)
    const fd = new FormData()
    console.log('fd in submit=>', fd)
    fd.append('description', description)
    fd.append('imageUrl', imageUrl)

    console.log('both imageUrl and description')
    await axios.put(`/api/homePageImages/${this.props.homePageImage.id}`, fd)
    await this.props.updateHomePageImage({
      ...this.props.homePageImage,
      ...this.state
    })
    let path = '/edit-home'
    this.props.history.push(path)
  }

  render() {
    console.log('let look at state=>', this.state)
    console.log('updatedHomePageImage at prop', this.props.homePageImage)
    const {imageUrl, description} = this.state
    console.log('imageUrl render=>', imageUrl)
    console.log('description render=>', description)
    return (
      <section className="editHomeImageSection">
        <h2 className="editHomeImageTitle">Edit Image Detail</h2>
        <form
          onSubmit={this.handleSubmit}
          method="put"
          encType="multipart/form-data"
        >
          <div className="editHomeImageContainer">
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

          <div className="editHomeImageContainer">
            <label htmlFor="description">
              <b>Description</b>
            </label>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="description"
              onChange={this.handleChangeDescription}
            />
          </div>
          <div className="editHomeImageContainer">
            <button className="editHomeImageSubmit" type="submit">
              Update Image
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
    updateHomePageImage: homePageImage =>
      dispatch(updateHomePageImage(homePageImage)),
    getSingleHomePageImage: homePageImageId =>
      dispatch(fetchSingleHomePageImage(homePageImageId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  EditHomePageImageForm
)
