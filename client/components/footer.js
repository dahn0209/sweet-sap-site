import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fetchLocations} from '../store/locations'
import {connect} from 'react-redux'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './footer.css'

class Footer extends React.Component {
  componentDidMount() {
    this.props.getLocations()
  }

  render() {
    const locations = this.props.locations
    return (
      <footer>
        <div className="footer-content">
          {locations.map(eachLocation => {
            return (
              <div key={eachLocation.id}>
                <p>
                  {eachLocation.address}
                  <br />
                  {eachLocation.street}, {eachLocation.state},{' '}
                  {eachLocation.zipCode}
                </p>
                <p>Tel: {eachLocation.phone}</p>
              </div>
            )
          })}

          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/TheSweetSap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thesweetsap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>&copy;2023 by Sweet Sap Inc.</p>
        </div>
      </footer>
    )
  }
}
const mapState = state => {
  return {
    locations: state.locations
  }
}

const mapDispatch = dispatch => {
  return {
    getLocations: () => {
      return dispatch(fetchLocations())
    }
  }
}

export default connect(mapState, mapDispatch)(Footer)
