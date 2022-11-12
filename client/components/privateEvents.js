import React from 'react'
import {fetchPrivateEvents} from '../store/privateEvents'
import {connect} from 'react-redux'
import './privateEvents.css'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'

class PrivateEvents extends React.Component {
  componentDidMount() {
    this.props.getPrivateEvents()
  }

  render() {
    const privateEvents = this.props.privateEvents
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <Slider className="section" {...settings}>
          {privateEvents.map(privateEvent => {
            return (
              <img
                key={privateEvent.id}
                className="privateEventsGridItem"
                src={privateEvent.imageUrl}
              />
            )
          })}
        </Slider>
        <div id="privateEvent">
          <h2>Private Event</h2>
          <p>
            Due to Covid-19, private events are unavailable till further notice.
          </p>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    privateEvents: state.privateEvents
  }
}

const mapDispatch = dispatch => {
  return {
    getPrivateEvents: () => {
      return dispatch(fetchPrivateEvents())
    }
  }
}

export default connect(mapState, mapDispatch)(PrivateEvents)
