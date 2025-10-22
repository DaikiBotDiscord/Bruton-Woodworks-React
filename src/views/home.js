import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bruton Woodworks</title>
        <meta property="og:title" content="Bruton Woodworks" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-heading">
                Where Craftsmanship meets Creativity
              </h1>
              <Link
                to="/contact"
                className="home-primary1 button-primary button-lg button"
              >
                Get in touch with me
              </Link>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-text-container1">
              <span id="about-me" className="home-text10">
                about Me
              </span>
              <h2 className="home-text11 Heading2">
                <span>
                  I craft custom woodwork with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="home-text15">
                <span>
                  Hey everyone! My name is
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text17">Nick Bruton,</span>
                <span>
                  {' '}
                  and I&apos;m excited to introduce
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text19">Bruton Woodworking</span>
                <span>
                  {' '}
                  — where craftsmanship meets creativity officially. What
                  started as a passion project has grown into a full-time
                  venture. From custom furniture to unique home decor, I build
                  handmade, one-of-a-kind pieces that are made to last.
                </span>
                <br></br>
                <br></br>
              </span>
              <div className="home-checklist">
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text23">
                    <span>
                      Custom furniture (tables, shelves, benches, built‑ins)
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text26">
                    <span>Personalized home décor, wood art, and gifts</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text29">
                    <span>Made‑to‑order projects from sketch to finish</span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text32">
                    <span className="home-text33">
                      Based in Littleton, CO
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>— serving the South Denver Metro</span>
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text35">
                    <span>
                      Free brand‑style design chat/quote for new clients
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item6">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text38">
                    Support in any implementation — delivery &amp; installation
                    available
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image"
              />
            </div>
          </div>
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <h2 className="home-text39">Our Statement</h2>
              <span className="home-text40">
                Every cut, joint, and finish is done with care using quality
                materials and time‑honored techniques. Whether you&apos;re
                looking for a statement piece for your home, a personalized
                gift, or a custom project brought to life, I’m here to make it
                happen. I’d love your support as I get started — likes, shares,
                and referrals mean the world! If you have a project in mind,
                let’s talk.
              </span>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width4 max-content-container">
            <span className="home-text41">what are you waiting for?</span>
            <h2 className="home-text42 Heading2">Let’s collaborate!</h2>
            <span className="home-text43">
              Have a project in mind? Let’s bring it to life with expert
              craftsmanship and personal attention to detail. Whether it’s
              custom furniture, home décor, or a made-to-order design, I’m here
              to help.
            </span>
            <Link
              to="/contact"
              className="home-primary2 button-lg button-secondary-white button"
            >
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
