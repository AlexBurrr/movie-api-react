import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import TVHero from '../components/TVHero'
import MediaOverview from '../components/MediaOverview'
import Footer from '../components/Footer'
import Actors from '../components/Actors'
import ScrollToTop from '../components/ScrollToTop';
import Similar from '../components/Similar';
// import MoreLikeThis from '../components/MoreLikeThis'





const InfoContainer = styled.div`
color: #fff;
`


const TVInfo = () => {
    const tvInfo = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`



    useEffect(() => {
        axios.get(tvInfo)
            .then(res => {
                console.log(res.data);
            })
    }, [])


    return (
        <InfoContainer>
            <ScrollToTop />
            <TVHero />
            <MediaOverview x={'tv'} />
            <Actors x={'tv'} />
            <Similar x={'tv'} />
            <Footer />
        </InfoContainer>
    )
}

export default TVInfo
