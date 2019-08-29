import React from 'react'
import Head from 'next/head'
import Top from '../components/top'
import Map from '../components/map'
import SideBar from '../components/side-bar'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <Top />
    <Map />
    <SideBar />

  </div>
)

export default Home
