import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-thq-nav-elm ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink1 Navigation-Link">
        {props.link1}
      </Link>
      <a href="/#about-me" className="navigation-links-text Navigation-Link">
        {props.link2}
      </a>
      <Link to="/portfolio" className="navigation-links-navlink2">
        {props.link3}
      </Link>
      {/* <a href="/blog" className="navigation-links-link Navigation-Link">
        {props.link4}
      </a> */}
      <nav className="navigation-links-thq-navlinks-elm"></nav>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link3: 'Portfolio',
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
