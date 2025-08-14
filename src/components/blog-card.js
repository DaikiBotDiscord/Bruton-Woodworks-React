import React from 'react'

import PropTypes from 'prop-types'

import './blog-card.css'

const BlogCard = (props) => {
  return (
    <div className={`blog-card-blog-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="blog-card-image"
      />
      <div className="blog-card-container">
        <button className="blog-card-button button-secondary button">
          {props.button}
        </button>
        <span className="blog-card-text1">{props.text1}</span>
      </div>
      <span className="blog-card-text2">
        <span>
          Excepteur sint occaecat cupidatat non proident, sunt
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>in culpa qui and.</span>
      </span>
      <span className="blog-card-text5">{props.text}</span>
    </div>
  )
}

BlogCard.defaultProps = {
  button: 'Web Design',
  imageAlt: 'image',
  text1: 'Dec 8, 2022',
  imageSrc: '/rectangle%2099-1500w.png',
  rootClassName: '',
  text: 'Learn more',
}

BlogCard.propTypes = {
  button: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default BlogCard
