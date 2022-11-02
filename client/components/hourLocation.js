import React from 'react'
// import {fetchHomepageImages} from '../store/homePageImages'
// import {connect} from 'react-redux'
import './hourLocation.css'

class HourLocation extends React.Component {
  // componentDidMount() {
  //     this.props.getHomepageImages()
  //   }

  render() {
    // const homePageImages = this.props.homePageImages
    return (
      <section className="mainHourLocationContainer">
        <header className="hourLocationRow" id="hourLocationHeader">
          <h2>
            <span id="title">Indoor & Patio Dining Open!</span>
            <br />
            <span id="description">Walk-ins and reservations welcome!</span>
          </h2>
        </header>

        <div className="hourLocationRow" id="columnLocationHourContainer">
          <div className="eachColumns" id="locationGrid">
            <h2>- LOCATION -</h2>
            <p>189-11 Northern Boulevard</p>
            <p>Flushing NY, 11358</p>
            <p>Tel: 718-225-1000</p>
            <p>Want to make a reservation?</p>
            <p>Give us a call!</p>
            <p>Reservations requests made via email will NOT be accepted.</p>
          </div>
          <div className="eachColumns" id="timeGrid">
            <h3>Location</h3>
            <p>189-11 Northern Boulevard</p>
            <p>Flushing NY, 11358</p>
            <p>Tel: 718-225-1000</p>
            <p>Want to make a reservation?</p>
            <p>Give us a call!</p>
            <p>Reservations requests made via email will NOT be accepted.</p>
          </div>
        </div>

        <div className="hourLocationRow" id="mapContainer">
          <iframe src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </div>
      </section>
    )
  }
}

// const mapState = state => {
//   return {
//     homePageImages: state.homePageImages
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     getHomepageImages: () => {
//       return dispatch(fetchHomepageImages())
//     }
//   }
// }

export default // connect(mapState, mapDispatch)
HourLocation
