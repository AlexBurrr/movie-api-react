import React from 'react'
import Hero from '../components/Hero'
import PosterScroll from '../components/PosterScroll'
import TVScroll from '../components/TVScroll'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Hero />
            <PosterScroll title={'Trending Movies'} />
            <TVScroll title={'Trending TV Shows'} />
            <Footer />
        </div>
    )
}

export default Home
