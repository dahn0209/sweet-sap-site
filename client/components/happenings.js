import React from 'react'
import {fetchHappenings} from '../store/happenings'
import {connect} from 'react-redux'
import './happenings.css'
import Slider from 'react-slick'
import './slick.css'
import './slick-theme.css'

class Happening extends React.Component {
  componentDidMount() {
    this.props.getHappenings()
  }

  render() {
    const happenings = this.props.happenings
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
            {happenings.map(happening => {
              return (
                <img
                  key={happening.id}
                  className="happeningGridItem"
                  src={happening.imageUrl}
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
    happenings: state.happenings
  }
}

const mapDispatch = dispatch => {
  return {
    getHappenings: () => {
      return dispatch(fetchHappenings())
    }
  }
}

export default connect(mapState, mapDispatch)(Happening)
