import React from 'react'
import Link from 'gatsby-link'

const linkStyle = {
  background: 'rgba(298,298,298,.7)',
  borderRadius: '24px',
  fontSize: '24px',
  padding: '10px 20px',
  textDecoration: 'none',
  display: 'inline-block',
  color: 'black',
}

const ArchiveLinks = ({ style, includeAll }) => {
  return (
    <nav
      style={{
        ...style,
        minWidth: '400px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Link to="/post-list" style={linkStyle}>
        Enter Site
      </Link>
    </nav>
  )
}
export default ArchiveLinks
