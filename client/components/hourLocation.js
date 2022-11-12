import React from 'react'
import {fetchLocations} from '../store/locations'
import {connect} from 'react-redux'
import './hourLocation.css'

class HourLocation extends React.Component {
  componentDidMount() {
    this.props.getLocations()
  }

  render() {
    const locations = this.props.locations
    return (
      <section className="mainHourLocationContainer">
        <header className="hourLocationRow" id="hourLocationHeader">
          <h2>
            <span id="title">Indoor & Patio Dining Open!</span>
            <br />
            <span id="description">Walk-ins and reservations welcome!</span>
          </h2>
        </header>
        <div className="eachColumns" id="locationGrid">
          <h2>- LOCATION -</h2>
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

          <p>Want to make a reservation?</p>
          <p>Give us a call!</p>
          <p>
            <span>
              Reservations requests made via <br />
              email will NOT be accepted.
            </span>
          </p>
        </div>
        <div className="eachColumns" id="timeGrid">
          <h2>- HOURS -</h2>
          <p>
            <span>
              Monday - Thursday <br />
              11:00 AM - 10:30 PM
            </span>
          </p>
          <p>
            <span>
              Friday - Saturday <br />
              11:00 AM - 12:00 AM
            </span>
          </p>
          <p>
            <span>
              Sunday<br />
              11:00 AM - 10:00 AM
            </span>
          </p>
          <p>Want to make a reservation?</p>
          <p>Give us a call!</p>
          <p>
            <span>Kitchen and Bar closes 30 minutes before closing</span>
          </p>
        </div>
        <div className="hourLocationRow" id="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1775338783327!2d-73.7937772842866!3d40.75811984272898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261d263657dd5%3A0xec358a3e06259896!2s189-11%20Northern%20Blvd%2C%20Queens%2C%20NY%2011358!5e0!3m2!1sen!2sus!4v1667436757937!5m2!1sen!2sus"
            width="600 px"
            height="450 px"
            frameBorder="0"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
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

export default connect(mapState, mapDispatch)(HourLocation)
