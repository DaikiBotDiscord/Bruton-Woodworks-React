import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-thq-footer-elm section-container">
      <div className="max-content-container">
        <div className="footer-thq-top-part-elm">
          <div className="footer-thq-links-container-elm">
            <div className="footer-thq-product-container-elm">
              <span className="footer-text10">
                {props.text2 ?? (
                  <Fragment className="footer-fragment20">
                    <span className="footer-text39">Product</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text11">
                {props.text3 ?? (
                  <Fragment className="footer-fragment13">
                    <span className="footer-text32">About</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text12">
                {props.text4 ?? (
                  <Fragment className="footer-fragment15">
                    <span className="footer-text34">Portofolio</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link">
                {props.text5 ?? (
                  <Fragment className="footer-fragment24">
                    <span className="footer-text46">Blog</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-thq-navigate-container-elm">
              <span className="footer-text14">
                {props.text6 ?? (
                  <Fragment className="footer-fragment16">
                    <span className="footer-text35">Navigate</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text15">
                {props.text8 ?? (
                  <Fragment className="footer-fragment19">
                    <span className="footer-text38">Sitemap</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link">
                {props.text9 ?? (
                  <Fragment className="footer-fragment11">
                    <span className="footer-text30">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="footer-thq-contact-container-elm">
              <span className="footer-text17">
                {props.text10 ?? (
                  <Fragment className="footer-fragment14">
                    <span className="footer-text33">Contact Us</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-text18">
                {props.text11 ?? (
                  <Fragment className="footer-fragment10">
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
          <div className="footer-thq-subscribe-container-elm">
            <span className="footer-text19">
              {props.text1 ?? (
                <Fragment className="footer-fragment18">
                  <span className="footer-text37">
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
                  <Fragment className="footer-fragment17">
                    <span className="footer-text36">Subscribe</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-thq-separator-elm"></div>
      <footer className="footer-thq-max-width-elm2 max-content-container">
        <a href="/home">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="footer-image"
          />
        </a>
        <span className="footer-text21">
          {props.text12 ?? (
            <Fragment className="footer-fragment22">
              <span className="footer-text41">
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
      <nav className="footer-thq-navlinks-elm">
        <Link to="/">
          {props.text14 ?? (
            <Fragment className="footer-fragment23">
              <span className="footer-text45">Home</span>
            </Fragment>
          )}
        </Link>
        <Link to="/contact">
          {props.text13 ?? (
            <Fragment className="footer-fragment12">
              <span className="footer-text31">Contact</span>
            </Fragment>
          )}
        </Link>
        <Link to="/portfolio">
          {props.text15 ?? (
            <Fragment className="footer-fragment21">
              <span className="footer-text40">Portfolio</span>
            </Fragment>
          )}
        </Link>
      </nav>
    </div>
  )
}

Footer.defaultProps = {
  text11: undefined,
  text9: undefined,
  text13: undefined,
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
  text15: undefined,
  text12: undefined,
  text14: undefined,
  text5: undefined,
  textinputPlaceholder: 'Enter your e-mail address',
}

Footer.propTypes = {
  text11: PropTypes.element,
  text9: PropTypes.element,
  text13: PropTypes.element,
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
  text15: PropTypes.element,
  text12: PropTypes.element,
  text14: PropTypes.element,
  text5: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
}

export default Footer
