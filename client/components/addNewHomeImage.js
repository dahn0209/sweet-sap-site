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

    this.handleChangeImgUrl = this.handleChangeImgUrl.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeImgUrl(event) {
    // console.log('event taget files=>',event.target.files)
    console.log('event taget files[0]=>', event.target.files[0])
    let file = event.target.files[0]
    console.log('file=>', file)
    console.log('fileName=>', file)
    this.setState({imageUrl: file}, () => {
      console.log('this is state imageUrl==>', this.state.imageUrl)
    })
    console.log('file[0]=>', file[0])
  }

  handleChangeDescription(event) {
    this.setState({
      description: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData()
    console.log('sumbut imgURL state=>', this.state.imageUrl)
    formData.append('imageUrl', this.state.imageUrl)
    console.log('this is formData=>', formData)
    fetch('	http://localhost:8080/newHomeImages/', {
      method: 'post',
      body: formData
    })
      .then(res => {
        res.text()
      })
      .then(resBody => {
        console.log('this is resBody=>', resBody)
      })

    this.props.createHomePageImage({...this.state})
    this.setState(defaultState)
    let path = '/edit-home'
    this.props.history.push(path)
  }

  render() {
    console.log('state addNewHome=>', this.state)
    const {description} = this.state

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
              // value={imageUrl}
              accept="image/*"
              onChange={this.handleChangeImgUrl}
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
              placeholder="Image Description"
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
    newHomePageImage: state.homePageImages
  }
}

const mapDispatch = dispatch => {
  return {
    createHomePageImage: homePageImage =>
      dispatch(createHomePageImage(homePageImage))
  }
}

export default connect(mapState, mapDispatch)(AddHomePageImageForm)
