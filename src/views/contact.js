import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
    return (
        <div className="contact-container">
            <Helmet>
                <title>Contact | Bruton Woodworks</title>
                <meta property="og:title" content="Contact | Bruton Woodworks" />
            </Helmet>
            <Navigation />
            <main className="contact-main">
                <div className="contact-hero section-container">
                    <div className="contact-max-width1 max-content-container"></div>
                </div>
                <div className="contact-about section-container">
                    <div className="contact-max-width2 max-content-container">
                        <div className="contact-text-container">
                            <span className="contact-text10">Contact Me</span>
                            <h2 className="contact-text11 Heading2">Nick Bruton</h2>
                            <div className="contact-checklist">
                                <div className="contact-check-item1">
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
                                    <a href="tel:+17208458193" className="contact-link1">
                                        <span>+1 (720) 845-8193</span>
                                        <br></br>
                                    </a>
                                </div>
                                <div className="contact-check-item2">
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
                                        className="contact-link2"
                                    >
                                        <span>Nick@brutonwood.work</span>
                                        <br></br>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-image-container">
                            <img
                                alt="image"
                                src="/contact-image.jpeg"
                                className="contact-image"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Contact
