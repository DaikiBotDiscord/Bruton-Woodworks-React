import React from 'react'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header data-role="Header" className="navigation-header">
      <div className="navigation-max-width">
        <img
          src="/logo_colorstranstop-200h.png"
          className="navigation-image1"
        />
        <div className="navigation-nav1">
          <NavigationLinks
            link1="Home"
            rootClassName="navigation-linksroot-class-name17"
          ></NavigationLinks>
          <a
            href="/contact"
            className="navigation-register1 button-secondary button button-md"
          >
            {props.button}
          </a>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon1">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav2">
            <div className="navigation-container">
              <img alt={props.imageAlt1} src={props.imageSrc1} />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon3">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="navigation-linksroot-class-name18"></NavigationLinks>
            <a
              href="/contact"
              className="navigation-register2 button-secondary button button-md"
            >
              {props.button2}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  button: 'Get in touch',
  imageAlt1: 'image',
  imageSrc1: '/logo_colorstranstop-200h.png',
  button2: 'Get in touch',
}

Navigation.propTypes = {
  button: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  button2: PropTypes.string,
}

export default Navigation
