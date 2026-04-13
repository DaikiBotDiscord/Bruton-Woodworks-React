import React from 'react'

import PropTypes from 'prop-types'

import './event-card.css'

const EventCard = (props) => {
  return (
    <div className="event-card-thq-event-card-elm">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="event-card-image"
      />
      <div className="event-card-thq-vertical-line-elm"></div>
      <div className="event-card-container">
        <span className="event-card-thq-title-elm">{props.newProp}</span>
        <span className="event-card-thq-text-elm">{props.text}</span>
      </div>
    </div>
  )
}

EventCard.defaultProps = {
  newProp: 'Inbound Marketing Secrets',
  imageAlt: 'image',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=200',
}

EventCard.propTypes = {
  newProp: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default EventCard
