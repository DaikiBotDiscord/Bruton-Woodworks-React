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
          <div className="portfolio-thq-portfolio-grid-elm portfolio-grid">
            {/* Card 1 - 2-Tier Cedar & Pine Vertical Planter */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Craftsman skillfully restoring a wooden chair in his workshop"
                  src="2-3 tiered planters-3.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Restoration</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  2-Tier Cedar &amp; Pine Vertical Planter
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    Space-saving cedar planter with a sturdy pine base, perfect
                    for patios, decks, or balconies.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Durable cedar boxes (rot &amp; insect resistant)
                  </span>
                  <br></br>
                  <span>• Strong pine frame with modern dark supports</span>
                  <br></br>
                  <span>
                    • Tiered design for better sunlight and easy access
                  </span>
                  <br></br>
                  <span>• Great for herbs, flowers, or succulents</span>
                  <br></br>
                  <br></br>
                  <span>
                    Specs: ~30&quot; W x 15&quot; H x 17.5&quot; D | ¾&quot;
                    cedar | Built-in drainage
                  </span>
                  <br></br>
                  <span>Optional Black Painted Base</span>
                </p>
              </div>
            </article>
            {/* Card 2 - 3-Tier Cedar & Pine Vertical Planter */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Close-up of a rustic wooden chair against a wooden table"
                  src="2-3 tiered planters-2.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Furniture</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  3-Tier Cedar &amp; Pine Vertical Planter
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    Space-saving cedar planter with a sturdy pine base—perfect
                    for patios, decks, or balconies.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Durable cedar boxes (rot &amp; insect resistant)
                  </span>
                  <br></br>
                  <span>• Strong pine frame with modern dark supports</span>
                  <br></br>
                  <span>• Tiered design for maximum sunlight</span>
                  <br></br>
                  <span>• Ideal for herbs, flowers, or succulents</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>
                    Specs: ~35&quot; W x 33&quot; H x 30&quot; D | Cedar &amp;
                    pine | Built-in drainage
                  </span>
                  <br></br>
                  <span>Optional Black Painted Base</span>
                  <br></br>
                </p>
              </div>
            </article>
            {/* Card 3 - Wine Cork Trivet */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Simple and modern wooden chair and cabinet in a minimalist interior"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Modern Design</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  <span>Wine Cork Trivet</span>
                  <br></br>
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    Protect your counters and tables with this stylish,
                    heat-resistant trivet made from wine cork and quality
                    hardwood.
                  </span>
                  <br></br>
                  <br></br>
                  <span>• Durable hardwood (poplar) construction</span>
                  <br></br>
                  <span>
                    • Natural oil or stained finishes (Cherry, English Chestnut)
                  </span>
                  <br></br>
                  <span>• Heat-resistant semi-gloss clear coat</span>
                  <br></br>
                  <span>• Unique wine cork design</span>
                  <br></br>
                  <br></br>
                  <span>Size: 10.5&quot; square (custom sizes available)</span>
                </p>
              </div>
            </article>
            {/* Card 4 - Medium Cedar Planter Box */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Interior of cozy dining room with wooden table and chairs"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Custom Build</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  Medium Cedar Planter Box
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    A compact, rustic planter perfect for herbs, succulents, or
                    flowers—great for indoor or outdoor use.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Made from Western red cedar (naturally rot &amp; insect
                    resistant)
                  </span>
                  <br></br>
                  <span>
                    • Spacious single compartment (optional divider available)
                  </span>
                  <br></br>
                  <span>
                    • Weather-resistant construction with protective clear
                    finish
                  </span>
                  <br></br>
                  <span>• Handmade with attention to detail</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>Size: 13.5&quot; L x 13.5&quot; W x 15&quot; H</span>
                  <br></br>
                  <span>Note: 50% deposit required</span>
                </p>
              </div>
            </article>
              {/* Card 5 - Small Cedar Planter Box */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Artisan carefully crafting wood with traditional hand tools"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Featured Work</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  Small Cedar Planter Box
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    A simple, elegant cedar planter that adds a rustic touch to
                    any indoor or outdoor space—perfect for herbs, succulents,
                    or flowers.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <span>
                    • Handcrafted from Western red cedar (naturally rot &amp;
                    insect resistant)
                  </span>
                  <br></br>
                  <span>
                    • Durable hardware with weather-resistant construction
                  </span>
                  <br></br>
                  <span>
                    • Square design with subtle tapered sides and decorative
                    corners
                  </span>
                  <br></br>
                  <span>• Built-in drainage for healthy plants</span>
                  <br></br>
                  <br></br>
                  <span>Size: 12&quot; L x 12&quot; W x 13.5&quot; H</span>
                </p>
              </div>
            </article>
              {/* Card 6 - 6ft 5 Piece Trellis */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Cozy outdoor patio featuring rustic wooden furniture"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Outdoor</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">6ft 5 Piece Trellis</h3>
                <p className="portfolio-card-description">
                  <span>
                    A rustic, elegant trellis perfect for supporting climbing
                    plants, roses, or vines in any outdoor space.
                  </span>
                  <br></br>
                  <br></br>
                  <span>• Made from sustainably sourced Western red cedar</span>
                  <br></br>
                  <span>
                    • 5-piece design (~6 ft tall each) with a unique curved look
                  </span>
                  <br></br>
                  <span>• Weather-resistant with protective clear finish</span>
                  <br></br>
                  <span>• Naturally resistant to rot, decay, and insects</span>
                  <br></br>
                  <br></br>
                  <span>
                    Perfect for adding height and character to your garden or
                    patio.
                  </span>
                </p>
              </div>
            </article>
              {/* Card 7 - Large Blue Pine Planter Box */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Cozy outdoor patio featuring rustic wooden furniture"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Outdoor</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  Large Blue Pine Planter Box
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    A rustic, eye-catching planter made from unique Blue
                    Pine—perfect for herbs, succulents, or flowers indoors or
                    out.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Handcrafted Blue Pine with a soft, natural blue finish
                  </span>
                  <br></br>
                  <span>• Durable build with weather-resistant materials</span>
                  <br></br>
                  <span>
                    • Rectangular design with tapered sides and decorative
                    corners
                  </span>
                  <br></br>
                  <span>• Built-in drainage for healthy plants</span>
                  <br></br>
                  <br></br>
                  <span>Size: 15&quot; W x 14&quot; L x 16&quot; H</span>
                  <br></br>
                  <span>Note: 50% deposit required</span>
                </p>
              </div>
            </article>
              {/* Card 8 - Unique Scalloped Planter */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Cozy outdoor patio featuring rustic wooden furniture"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Outdoor</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                  Unique Scalloped Planter
                </h3>
                <p className="portfolio-card-description">
                  <span>
                    A charming, handcrafted cedar planter with a rustic
                    look—perfect for adding warmth to any space.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    • Made from light-toned cedar with visible natural grain
                  </span>
                  <br></br>
                  <span>
                    • Unique scalloped top edges with a beveled design
                  </span>
                  <br></br>
                  <span>• Simple square shape with a handcrafted feel</span>
                  <br></br>
                  <span>
                    • Natural finish that highlights the wood’s beauty
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Perfect for herbs, flowers, or small plants indoors or
                    outdoors.
                  </span>
                </p>
              </div>
            </article>
              {/* Card 9 - Hat Rack/Display */}
            <article className="portfolio-card">
              <div className="portfolio-card-image-wrapper">
                <img
                  alt="Cozy outdoor patio featuring rustic wooden furniture"
                  src="Image-Coming-Soon.png"
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay">
                  <span className="portfolio-card-category">Outdoor</span>
                </div>
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">Hat Rack/Display</h3>
                <p className="portfolio-card-description">
                  <span>
                    A sleek, wall-mounted organizer crafted from solid
                    cedar—perfect for storing and displaying your cap
                    collection.
                  </span>
                  <br></br>
                  <br></br>
                  <span>• Slim, vertical design saves space</span>
                  <br></br>
                  <span>
                    • Angled slots securely hold hats without crushing
                  </span>
                  <br></br>
                  <span>
                    • Made from aromatic cedar with a clean, rustic look
                  </span>
                  <br></br>
                  <span>• Functional storage that doubles as display</span>
                  <br></br>
                  <br></br>
                  <span>
                    Perfect for keeping your hats organized and easily
                    accessible.
                  </span>
                </p>
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
      <Footer/>
    </div>
  )
}

export default Portfolio
