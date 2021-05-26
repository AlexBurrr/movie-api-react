import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import TVHero from '../components/TVHero'


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
    })


    return (
        <InfoContainer>
            <TVHero />
        </InfoContainer>
    )
}

export default TVInfo
