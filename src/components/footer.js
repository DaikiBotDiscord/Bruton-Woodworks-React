import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer section-container">
      <div className="max-content-container">
        <div className="footer-top-part">
          <div className="footer-links-container">
            <div className="footer-product-container">
              <span className="footer-text10">
                {props.text2 ?? (
                  <Fragment>
                    <span className="footer-text38">Product</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text11">
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer-text31">About</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text12">
                {props.text4 ?? (
                  <Fragment>
                    <span className="footer-text33">Portfolio</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text5 ?? (
                  <Fragment>
                    <span className="footer-text39">Blog</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-navigate-container">
              <span className="footer-text14">
                {props.text6 ?? (
                  <Fragment>
                    <span className="footer-text34">Navigate</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text15">
                {props.text8 ?? (
                  <Fragment>
                    <span className="footer-text37">Sitemap</span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text9 ?? (
                  <Fragment>
                    <span className="footer-text30">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-contact-container">
              <span className="footer-text17">
                {props.text10 ?? (
                  <Fragment>
                    <span className="footer-text32">Contact Us</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text18">
                {props.text11 ?? (
                  <Fragment>
                    <span className="footer-text22">
                      <span>5593 S Datura</span>
                      <br></br>
                      <span>Street, Littleton</span>
                      <br></br>
                      <span> Colorado</span>
                      <br></br>
                      <span>80120</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer-subscribe-container">
            <span className="footer-text19">
              {props.text1 ?? (
                <Fragment>
                  <span className="footer-text36">
                    Subscribe to our newsletter
                  </span>
                </Fragment>
              )}
            </span>
            <input
              type="text"
              placeholder={props.textinputPlaceholder}
              className="footer-textinput input"
            />
            <button className="button-primary button">
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="footer-text35">Subscribe</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-separator"></div>
      <footer className="footer-max-width2 max-content-container">
        <a href="/home" target="_blank" rel="noreferrer noopener">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="footer-image"
          />
        </a>
        <span className="footer-text21">
          {props.text12 ?? (
            <Fragment>
              <span className="footer-text40">
                <span>
                  All rights reserved
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a
                  href="https://app.copyrighted.com/website/cTJZUAvq781Ukxnm/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  ©
                </a>
                <br></br>
                <span>Daiki Development</span>
              </span>
            </Fragment>
          )}
        </span>
      </footer>
    </div>
  )
}

Footer.defaultProps = {
  text11: undefined,
  text9: undefined,
  text3: undefined,
  imageSrc: '/bruton_woodworks-300w.png',
  text10: undefined,
  text4: undefined,
  text6: undefined,
  imageAlt: 'image',
  button: undefined,
  text1: undefined,
  text8: undefined,
  text2: undefined,
  text5: undefined,
  textinputPlaceholder: 'Enter your e-mail address',
  text12: undefined,
}

Footer.propTypes = {
  text11: PropTypes.element,
  text9: PropTypes.element,
  text3: PropTypes.element,
  imageSrc: PropTypes.string,
  text10: PropTypes.element,
  text4: PropTypes.element,
  text6: PropTypes.element,
  imageAlt: PropTypes.string,
  button: PropTypes.element,
  text1: PropTypes.element,
  text8: PropTypes.element,
  text2: PropTypes.element,
  text5: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  text12: PropTypes.element,
}

export default Footer
