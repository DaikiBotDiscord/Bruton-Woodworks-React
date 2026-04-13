import React from 'react'

import PropTypes from 'prop-types'

import './portofolio-card.css'

const PortofolioCard = (props) => {
  return (
    <div
      className={`portofolio-card-thq-speaker-card-elm ${props.rootClassName} `}
    >
      <div className="portofolio-card-thq-image-container-elm">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="portofolio-card-image"
        />
        <div className="portofolio-card-thq-see-project-container-elm">
          <button className="button-secondary-white button button-md">
            See project
          </button>
        </div>
      </div>
      <span className="portofolio-card-thq-first-name-elm">
        {props.projectTitle}
      </span>
    </div>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  projectTitle: 'Office Life Campaign - Boost your creativity',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&ixlib=rb-1.2.1&w=300',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  projectTitle: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default PortofolioCard
