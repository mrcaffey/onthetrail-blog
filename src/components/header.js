import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
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
            color: `white`,
            textDecoration: `none`, 
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link to="/contact/" style={{ color: 'green', float: 'right', margin: '10px' }}>Contact Me</Link>
    <Link to="/portfolio/" style={{ color: 'green', float: 'right', margin: '10px' }}>Portfolio</Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
