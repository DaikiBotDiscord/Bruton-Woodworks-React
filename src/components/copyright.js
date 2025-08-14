import React from 'react'

import PropTypes from 'prop-types'

import './copyright.css'

const Copyright = (props) => {
  return (
    <div className={`copyright-copyright ${props.rootClassName} `}>
      <div className="copyright-max-width">
        <span className="copyright-text10">
          <span className="copyright-text11">
            <span>
              © All rights reserved
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.teleporthq.io"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text14">@TeleportHQ.</span>
          </a>
          <span className="copyright-text15">
            <span>
              {' '}
              Powered by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.vercel.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text18">Vercel</span>
          </a>
          <span className="copyright-text19">
            <span>
              . Image source:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <a
            href="https://www.unsplash.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="copyright-text22">Unsplash</span>
          </a>
          <span className="copyright-text23">.</span>
        </span>
      </div>
    </div>
  )
}

Copyright.defaultProps = {
  rootClassName: '',
}

Copyright.propTypes = {
  rootClassName: PropTypes.string,
}

export default Copyright
