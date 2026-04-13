import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container1">
      <Helmet>
        <title>Portfolio - Bruton Woodworks</title>
        <meta property="og:title" content="Portfolio - Bruton Woodworks" />
        <link
          rel="canonical"
          href="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/portfolio"
        />
        <meta
          property="og:url"
          content="https://creative-agency-page-nlvcaa-daikibotdiscords-projects.vercel.app/portfolio"
        />
      </Helmet>
      <Navigation></Navigation>
      <div className="portfolio-container2">
        <div className="portfolio-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-bg-image {
  animation: none;
}
.hero-content {
  animation: none;
}
.hero-scroll-line {
  animation: none;
}
.portfolio-card, .portfolio-card-image, .portfolio-card-overlay {
  transition: none;
}
.portfolio-card:hover, .portfolio-card:nth-child(n):hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <section aria-labelledby="hero-title" className="hero-section">
        <div className="hero-background">
          <img
            alt="Rustic workbench covered in wood shavings, showcasing detailed craftsmanship"
            src="https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <div className="hero-badge">
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                className="hero-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0-12 0"></path>
                  <path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 3H12c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 0 1 6 12.127V5.5m4 7V14m4 2v1"></path>
                </g>
              </svg>
              <span>Hand Crafted Woodworking</span>
            </div>
            <h1 id="hero-title" className="hero-title">
              Portfolio
            </h1>
            <div className="hero-cta">
              <a href="#projects">
                <div className="hero-button-primary hero-button">
                  <span>View Projects</span>
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="hero-scroll-indicator">
          <div className="hero-scroll-line"></div>
        </div>
      </section>
      <section
        id="projects"
        aria-labelledby="portfolio-title"
        className="portfolio-section"
      >
        <div className="portfolio-wrapper">
          <header className="portfolio-header">
            <span className="portfolio-label">Our Work</span>
            <p className="portfolio-description">
              A curated collection of our finest woodworking projects, each
              piece meticulously crafted to showcase the natural beauty and
              character of premium wood.
            </p>
          </header>
          <div className="portfolio-grid">
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Craftsman skillfully restoring a wooden chair in his workshop"
                  src="https://images.pexels.com/photos/31567149/pexels-photo-31567149.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Restoration</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Close-up of a rustic wooden chair against a wooden table"
                  src="https://images.pexels.com/photos/1629191/pexels-photo-1629191.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Furniture</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Simple and modern wooden chair and cabinet in a minimalist interior"
                  src="https://images.pexels.com/photos/12277202/pexels-photo-12277202.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Modern Design</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Interior of cozy dining room with wooden table and chairs"
                  src="https://images.pexels.com/photos/5998031/pexels-photo-5998031.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Custom Build</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
            <article className="portfolio-card-featured portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Artisan carefully crafting wood with traditional hand tools"
                  src="https://images.pexels.com/photos/30907881/pexels-photo-30907881.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Featured Work</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Cozy outdoor patio featuring rustic wooden furniture"
                  src="https://images.pexels.com/photos/31310746/pexels-photo-31310746.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Outdoor</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Project Name</h3>
                <p className="portfolio-card-description">Description</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="portfolio-container4">
        <div className="portfolio-container5">
          <Script
            html={`<style>
        @keyframes hero-ken-burns {0% {transform: scale(1.05) translateX(0);}
100% {transform: scale(1.15) translateX(-2%);}}@keyframes hero-fade-up {from {opacity: 0;
transform: translateY(40px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes hero-scroll-pulse {0%,100% {opacity: 0.3;
transform: scaleY(0.8);}
50% {opacity: 1;
transform: scaleY(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="portfolio-container6">
        <div className="portfolio-container7">
          <Script
            html={`<script defer data-name="portfolio-interactions">
(function(){
  ;(function () {
    "use strict"

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          fadeInObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Apply fade-in to portfolio cards
    document.querySelectorAll(".portfolio-card").forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = \`opacity 0.6s ease \${index * 0.1}s, transform 0.6s ease \${index * 0.1}s\`
      fadeInObserver.observe(card)
    })
  })()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer
        text1={
          <Fragment>
            <span className="portfolio-text12">
              Subscribe to our newsletter
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="portfolio-text13">Product</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="portfolio-text14">About</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="portfolio-text15">Portofolio</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="portfolio-text16">Blog</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="portfolio-text17">Navigate</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="portfolio-text18">Sitemap</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="portfolio-text19">Privacy Policy</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="portfolio-text20">Subscribe</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="portfolio-text21">Contact Us</span>
          </Fragment>
        }
        text11={
          <Fragment className="portfolio-fragment20">
            <span className="portfolio-text22">
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
          <Fragment className="portfolio-fragment21">
            <span className="portfolio-text30">
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
            <span className="portfolio-text34">Contact</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="portfolio-text35">Home</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="portfolio-text36">Portfolio</span>
          </Fragment>
        }
      ></Footer>
    </div>
  )
}

export default Portfolio
