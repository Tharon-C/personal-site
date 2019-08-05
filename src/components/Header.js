import React from 'react'
import Logo from '../components/graphics/Logo'
import Link from 'gatsby-link'

const Header = ({ compact, linkable, isBlue, style }) => {
  const Name = (
    <h1 style={{ marginBottom: 0, fontSize: compact ? '22px' : '42px' }}>
      Tharon Carlson
    </h1>
  )
  const Title = linkable ? (
    <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
      {Name}
    </Link>
  ) : (
    Name
  )

  return (
    <header style={{ display: 'flex', alignItems: 'center', ...style }}>
      <Logo isBlue={ isBlue } size={compact ? '50px' : '100px'} />
      <div>
        {Title}
        {compact ? null : (
          <p style={{ marginBottom: 0, fontSize: compact ? '16px' : '24px' }}>
            Front End Developer / UI Designer
          </p>
        )}
      </div>
    </header>
  )
}

export default Header
