import React from 'react'
import {fetchPrivateEvents} from '../store/privateEvents'
import {connect} from 'react-redux'
import './happenings.css'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'

class Happening extends React.Component {
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
      <section>
        <div className="currentHapping">
          <h2>Upcoming & Current Happenings</h2>
        </div>
        <div className="pastHappening">
          <h1>PAST HAPPENINGS</h1>
          <Slider className="happeningSection" {...settings}>
            {privateEvents.map(privateEvent => {
              return (
                <img
                  key={privateEvent.id}
                  className="happeningGridItem"
                  src={privateEvent.imageUrl}
                />
              )
            })}
          </Slider>
        </div>
      </section>
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

export default connect(mapState, mapDispatch)(Happening)
