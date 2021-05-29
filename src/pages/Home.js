import React from 'react'
import Hero from '../components/Hero'
import PosterScroll from '../components/PosterScroll'
import TVScroll from '../components/TVScroll'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <PosterScroll title={'Trending Movies'} />
            <TVScroll title={'Trending TV Shows'} />
            <Footer />
        </div>
    )
}

export default Home
