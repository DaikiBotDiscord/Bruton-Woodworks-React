import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container1">
      <Helmet>
        <title>Not-Found - Bruton Woodworks</title>
        <meta property="og:title" content="Not-Found - Bruton Woodworks" />
        <link
          rel="canonical"
          href="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/not-found"
        />
        <meta
          property="og:url"
          content="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/not-found"
        />
      </Helmet>
      <Navigation></Navigation>
      <section aria-labelledby="error-heading" className="error-hero">
        <div className="error-hero__container">
          <div className="error-hero__content">
            <div aria-hidden="true" className="error-hero__code">
              <span>404</span>
            </div>
            <h1 id="error-heading" className="error-hero__title">
              404 Not found
            </h1>
            <p className="error-hero__message">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="nav-heading" className="error-nav">
        <h2 id="nav-heading" className="error-nav__heading visually-hidden">
          Helpful Navigation Links
        </h2>
        <div className="error-nav__container">
          <div className="error-nav__grid">
            <Link to="/">
              <div className="error-nav__card">
                <span aria-hidden="true" className="error-nav__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </g>
                  </svg>
                </span>
                <span className="error-nav__label">Home</span>
                <span className="error-nav__hint">Return to the main page</span>
              </div>
            </Link>
            <a href="/explore">
              <div className="error-nav__card">
                <span aria-hidden="true" className="error-nav__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
                    </g>
                  </svg>
                </span>
                <span className="error-nav__label">Explore</span>
                <span className="error-nav__hint">
                  Discover our collections
                </span>
              </div>
            </a>
            <a href="/search">
              <div className="error-nav__card">
                <span aria-hidden="true" className="error-nav__icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21 21l-4.34-4.34"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </span>
                <span className="error-nav__label">Search</span>
                <span className="error-nav__hint">Find what you need</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <div className="not-found-container2">
        <div className="not-found-container3">
          <Script
            html={`<script defer data-name="error-page-interactions">
(function(){
  ;(function () {
    // Add subtle entrance animation for navigation cards
    const cards = document.querySelectorAll(".error-nav__card")

    if (cards.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
              }, index * 100)
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      )

      cards.forEach((card) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        card.style.transition = "opacity 500ms ease, transform 500ms ease, border-color 300ms ease, box-shadow 300ms ease"
        observer.observe(card)
      })
    }

    // Keyboard navigation enhancement
    cards.forEach((card) => {
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          card.click()
        }
      })
    })
  })()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer
        text1={
          <Fragment className="not-found-fragment10">
            <span className="not-found-text11">
              Subscribe to our newsletter
            </span>
          </Fragment>
        }
        text2={
          <Fragment className="not-found-fragment11">
            <span className="not-found-text12">Product</span>
          </Fragment>
        }
        text3={
          <Fragment className="not-found-fragment12">
            <span className="not-found-text13">About</span>
          </Fragment>
        }
        text4={
          <Fragment className="not-found-fragment13">
            <span className="not-found-text14">Portofolio</span>
          </Fragment>
        }
        text5={
          <Fragment className="not-found-fragment14">
            <span className="not-found-text15">Blog</span>
          </Fragment>
        }
        text6={
          <Fragment className="not-found-fragment15">
            <span className="not-found-text16">Navigate</span>
          </Fragment>
        }
        text8={
          <Fragment className="not-found-fragment16">
            <span className="not-found-text17">Sitemap</span>
          </Fragment>
        }
        text9={
          <Fragment className="not-found-fragment17">
            <span className="not-found-text18">Privacy Policy</span>
          </Fragment>
        }
        button={
          <Fragment className="not-found-fragment18">
            <span className="not-found-text19">Subscribe</span>
          </Fragment>
        }
        text10={
          <Fragment className="not-found-fragment19">
            <span className="not-found-text20">Contact Us</span>
          </Fragment>
        }
        text11={
          <Fragment className="not-found-fragment20">
            <span className="not-found-text21">
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
          <Fragment className="not-found-fragment21">
            <span className="not-found-text29">
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
          <Fragment className="not-found-fragment22">
            <span className="not-found-text33">Contact</span>
          </Fragment>
        }
        text14={
          <Fragment className="not-found-fragment23">
            <span className="not-found-text34">Home</span>
          </Fragment>
        }
        text15={
          <Fragment className="not-found-fragment24">
            <span className="not-found-text35">Portfolio</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default NotFound
