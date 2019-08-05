import React from 'react'
import Cabin from '../components/graphics/Cabin'
import Main from '../components/Main'
import Header from "../components/Header"
import ArchiveLinks from "../components/ArchiveLinks"
import Clouds from '../components/graphics/Clouds'
import Sun from "../components/graphics/Sun"

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
      <Header/>
      <Clouds style={{position: "fixed", top: "100px", left: 0, zIndex: -1}}/>
      <Cabin styleWrapper={{ position: "fixed", top: "200px", width: '40%', right: 0, left: 0, margin: 'auto' }} />
    </Main>
  )
}
