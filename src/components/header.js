import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      border: `2px solid black`,
      background: `#355e3b`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`, 
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link to="/contact/" style={{ color: 'black', float: 'right', margin: '10px', }}>Contact Me</Link>
    <Link to="/portfolio/" style={{ color: 'black', float: 'right', margin: '10px' }}>Portfolio</Link>
    <Link to="/blog/" style={{ color: 'black', float: 'right', margin: '10px' }}>Blog</Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
