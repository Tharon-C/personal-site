import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import HomeIcon from '../assets/baseline-home-24px.svg'

const NotFoundPage = () => (
  <div>
  <Main>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "60%"}}>
    <div style={{maxWidth: "600px"}}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
    </div>
  </Main>
  <Link style={{ position: 'absolute', top: '20px', left: '20px' }} to="/">
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
      <img fill="rgb(180, 153, 209)" width="30px" src={HomeIcon} />
    </div>
    </Link>
    </div>
)

export default NotFoundPage
