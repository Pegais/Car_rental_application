import React from 'react'
import Header from './homeSubcomponent/Header'
import Footer from './homeSubcomponent/Footer'
import Body from './homeSubcomponent/Body'
function Home({set}) {
  return (
    <>
      <Header set={set} />
      <Body />
      <Footer/>
    </>
  )
}

export default Home