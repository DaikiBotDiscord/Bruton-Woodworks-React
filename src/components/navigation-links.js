import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink Navigation-Link">
        {props.link1}
      </Link>
      <a
        href="/about"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link1 Navigation-Link"
      >
        {props.link2}
      </a>
      <a
        href="/portofolio"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2"
      >
        {props.link3}
      </a>
      <a href="/blog" className="navigation-links-link3 Navigation-Link">
        {props.link4}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Portofolio',
  rootClassName: '',
  link2: 'About',
  link4: 'Blog',
  link1: 'Home',
}

NavigationLinks.propTypes = {
  link3: PropTypes.string,
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link4: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
