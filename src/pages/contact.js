import React from 'react'
import Link from 'gatsby-link'
import Main from '../components/Main'
import ArchiveLinks from '../components/ArchiveLinks'
import Header from '../components/Header'
import GithubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import TwitterIcon from '../assets/twitter.svg'
import YouTubeIcon from '../assets/youtube.svg'

const SocialCard = ({ icon, name, userName, href }) => {
  return (
      <a
        style={{
          marginBottom: "48px",
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#da3200',
        }}
        href={href}
      >
        <img width="36px" src={icon} />
        <div style={{ marginLeft: '20px' }}>
          <h2
            style={{
              marginBottom: 0,

              fontSize: '18px',
            }}
          >
            {name}
          </h2>
          <p style={{ marginBottom: 0 }}>{userName}</p>
        </div>
      </a>
  )
}
export default function Index() {
  return (
    <Main>
      <ArchiveLinks
        style={{
          zIndex: 999,
          width: "75%",
          position: 'fixed',
          bottom: '10vh',
          left: 0,
          right: 0,
          margin: "auto",
          minWidth: '400px',
        }}
      />
      <Header linkable style={{ marginBottom: "42px"}}/>
      <section>
      <div style={{ marginBottom: '16px' }}>
        <SocialCard
          icon={GithubIcon}
          name="GitHub"
          userName="Tharon-C"
          href="https://github.com/tharon-c"
        />
        <SocialCard
          icon={TwitterIcon}
          name="Twitter"
          userName="@TharonCarlson"
          href="https://twitter.com/TharonCarlson"
        />
        <SocialCard
          icon={LinkedInIcon}
          name="LinkedIn"
          userName="Tharon-Carlson"
          href="https://linkedin.com/in/Tharon-Carlson"
        />
        <SocialCard
          icon={YouTubeIcon}
          name="YouTube"
          userName="Tharon Carlson"
          href="https://www.youtube.com/channel/UCqF7KU8kIGDAA-9xd4oOKvg"
        />
        </div>
      </section>
    </Main>
  )
}
