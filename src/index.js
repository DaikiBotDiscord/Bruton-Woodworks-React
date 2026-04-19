import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Contact from './views/contact'
import Portfolio from './views/portfolio'

const ScrollControls = () => {
  const location = useLocation()
  const [showScrollTopButton, setShowScrollTopButton] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`scroll-to-top-button ${showScrollTopButton ? 'is-visible' : ''}`}
    >
      Top
    </button>
  )
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [isDarkMode])

  const handleToggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode)
  }

  return (
    <Router>
      <ScrollControls />
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home
              {...routeProps}
              isDarkMode={isDarkMode}
              onToggleTheme={handleToggleTheme}
            />
          )}
        />
        <Route path='/home' component={() => {
          window.location.href = '/';
          return null;
        }} />
        <Route
          exact
          path="/contact"
          render={(routeProps) => (
            <Contact
              {...routeProps}
              isDarkMode={isDarkMode}
              onToggleTheme={handleToggleTheme}
            />
          )}
        />
        <Route
          exact
          path="/portfolio"
          render={(routeProps) => (
            <Portfolio
              {...routeProps}
              isDarkMode={isDarkMode}
              onToggleTheme={handleToggleTheme}
            />
          )}
        />
        <Route
          path="**"
          render={(routeProps) => (
            <NotFound
              {...routeProps}
              isDarkMode={isDarkMode}
              onToggleTheme={handleToggleTheme}
            />
          )}
        />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
