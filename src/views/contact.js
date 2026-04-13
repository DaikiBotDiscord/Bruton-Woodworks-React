import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Bruton Woodworks</title>
        <meta property="og:title" content="Contact - Bruton Woodworks" />
        <link
          rel="canonical"
          href="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/contact"
        />
        <meta
          property="og:url"
          content="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/contact"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="contact-thq-main-elm">
        <div className="contact-thq-hero-elm section-container">
          <div className="contact-thq-max-width-elm1 max-content-container"></div>
        </div>
        <div className="contact-thq-about-elm section-container">
          <div className="contact-thq-max-width-elm2 max-content-container">
            <div className="contact-thq-text-container-elm">
              <span className="text10">Contact Me</span>
              <h2 className="contact-text11 Heading2">Nick Bruton</h2>
              <div className="contact-thq-checklist-elm">
                <div className="thq-check-item-elm2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    className="contact-icon1"
                  >
                    <path
                      d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a href="tel:+17206869278" className="contact-link1 link2">
                    +1 (720) 686-9278
                  </a>
                </div>
                <div className="thq-check-item-elm2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="contact-icon3"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a
                    href="mailto:nick@brutonwood.work?subject="
                    className="link2"
                  >
                    <span>Nick@brutonwood.work</span>
                    <br></br>
                  </a>
                </div>
                <div className="thq-check-item-elm3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    className="contact-icon5"
                  >
                    <path
                      d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <a
                    href="https://www.facebook.com/people/Bruton-Woodworks/61578987614196/#"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link3"
                  >
                    <span>Bruton Woodworks</span>
                    <br></br>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-thq-image-container-elm">
              <img
                alt="image"
                src="/contact-image.jpeg"
                className="contact-image"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer
        text1={
          <Fragment>
            <span className="contact-text16">Subscribe to our newsletter</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="contact-text17">Product</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="contact-text18">About</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="contact-text19">Portofolio</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="contact-text20">Blog</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="contact-text21">Navigate</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="contact-text22">Sitemap</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="contact-text23">Privacy Policy</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="contact-text24">Subscribe</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="contact-text25">Contact Us</span>
          </Fragment>
        }
        text11={
          <Fragment className="contact-fragment20">
            <span className="contact-text26">
              <span>5593 S Datura</span>
              <br></br>
              <span>Street, Littleton</span>
              <br></br>
              <span> Colorado</span>
              <br></br>
              <span>80120</span>
            </span>
          </Fragment>
        }
        text12={
          <Fragment className="contact-fragment21">
            <span className="contact-text34">
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
        }
        text13={
          <Fragment>
            <span className="contact-text38">Contact</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="contact-text39">Home</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="contact-text40">Portfolio</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default Contact
