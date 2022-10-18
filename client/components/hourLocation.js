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
        <header className="hourLocationHeader">
          <h3>Indoor & Patio Dining Open!</h3>
          <h5>Walk-ins and reservations welcome!</h5>
        </header>

        <div className="hourLocationContainer">
          {/* {homePageImages.map(homePageImage => {
              return (
                <img
                  className="hourLocationGridItem"
                  src={homePageImage.imageUrl}
                  key={homePageImage.id}
                />
              )
            })} */}
          <div className="hourLocationGridItem" id="location">
            <h3>Location</h3>
            <p>189-11 Northern Boulevard</p>
            <p>Flushing NY, 11358</p>
            <p>Tel: 718-225-1000</p>
            <p>Wnat to make a reservation?</p>
            <p>Give us a call!</p>
            <p>Reservations requests made via email will NOT be accepted.</p>
          </div>
          <div className="hourLocationGridItem">
            <h3>Location</h3>
            <p>189-11 Northern Boulevard</p>
            <p>Flushing NY, 11358</p>
            <p>Tel: 718-225-1000</p>
            <p>Wnat to make a reservation?</p>
            <p>Give us a call!</p>
            <p>Reservations requests made via email will NOT be accepted.</p>
          </div>
          <div className="hourLocationGridItem">
            <h3>Location</h3>
            <p>189-11 Northern Boulevard</p>
            <p>Flushing NY, 11358</p>
            <p>Tel: 718-225-1000</p>
            <p>Wnat to make a reservation?</p>
            <p>Give us a call!</p>
            <p>Reservations requests made via email will NOT be accepted.</p>
          </div>

          {/* <img className="hourLocationGridItem"src='./IMG_0722.webp'/>
            <img className="hourLocationGridItem"src='./IMG_0722.webp'/>
            <img className="hourLocationGridItem"src='./IMG_0722.webp'/> */}
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
