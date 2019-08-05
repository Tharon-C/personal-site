import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import MessageIcon from '../assets/baseline-message-24px.svg'

import './index.css'
import '../styles/layout-overide.css'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
 
    <Link
      style={{ position: 'fixed', bottom: '20px', right: '20px' }}
      to="/contact"
    >
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      width: "62px",
      height: "62px",
      borderRadius: "100%",
      boxShadow: "0px 1px 4px 0px rgb(0,0,0,.6)"
    }}>
      <img fill="rgb(180, 153, 209)" width="30px" src={MessageIcon} />
    </div>
    </Link>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
