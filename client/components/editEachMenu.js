import React from 'react'
import {updateMenu} from '../store/menus'
import {connect} from 'react-redux'
import {fetchSingleMenu} from '../store/singleMenu'
import axios from 'axios'
import './editHomePageImage.css'

class EditEachMenu extends React.Component {
  constructor() {
    super()
    // console.log('props in super=>', this.props.menu)

    this.state = {
      imageUrl: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeDescription = this.handleChangeDescription.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const menuId = this.props.match.params.menuId
    this.props.getSingleMenu(menuId)
    const {imageUrl, description} = this.props.menu
    console.log('description in edit=>', description)
    console.log('imageUrl in edit=>', imageUrl)
    if (menuId) {
      this.setState({
        imageUrl: imageUrl,
        description: description
      })
    }
    console.log('this state=>', this.state)
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps in update=>', prevProps)
    console.log('prevProps.update dee in update=>', prevProps.menu)

    const {imageUrl, description, id} = this.props.menu
    console.log('update imageUrl=>', imageUrl)
    console.log('update description=>', description)
    console.log('update id=>', id)

    if (prevProps.menu.id !== id) {
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
    console.log('submit  props=>', this.props.menu)
    let {imageUrl, description} = this.state
    console.log('submit imageUrl=>', imageUrl)
    console.log('sumb description=>', description)
    const fd = new FormData()
    console.log('fd in submit=>', fd)
    fd.append('description', description)
    fd.append('imageUrl', imageUrl)

    console.log('both imageUrl and description')
    await axios.put(`/api/menus/${this.props.menu.id}`, fd)
    await this.props.updateMenu({
      ...this.props.menu,
      ...this.state
    })
    let path = '/edit-menu'
    this.props.history.push(path)
  }

  render() {
    console.log('let look at state=>', this.state)
    console.log('updatedMenu at prop', this.props.menu)
    const {imageUrl, description} = this.state
    console.log('imageUrl render=>', imageUrl)
    console.log('description render=>', description)
    return (
      <section className="editHomeImageSection">
        <h2 className="editHomeImageTitle">Edit Menu Detail</h2>
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
              Update Menu
            </button>
          </div>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMenu: menu => dispatch(updateMenu(menu)),
    getSingleMenu: menuId => dispatch(fetchSingleMenu(menuId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEachMenu)
