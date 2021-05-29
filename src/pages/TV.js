import React from 'react'
import AllTV from '../components/AllTV'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop';

const TV = () => {
    return (
        <div>
            <ScrollToTop />
            <Hero />
            <AllTV />
            <Footer />
        </div>
    )
}

export default TV
