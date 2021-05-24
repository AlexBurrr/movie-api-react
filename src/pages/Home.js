import React from 'react'
import Hero from '../components/Hero'
import PosterScroll from '../components/PosterScroll'

const Home = () => {
    return (
        <div>
            <Hero />
            <PosterScroll title={'Trending Movies'} />
            <PosterScroll title={'Trending TV Shows'} />
        </div>
    )
}

export default Home
