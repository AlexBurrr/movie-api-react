import React from 'react'
import Hero from '../components/Hero'

import AllMovieTypes from '../components/AllMovieTypes'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';

const Movies = () => {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <AllMovieTypes />
            <Footer />

        </div>
    )
}

export default Movies
