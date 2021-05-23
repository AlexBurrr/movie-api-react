import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { trendingMedia } from '../apiCalls/apiVariables'

import HeroData from '../apiCalls/movies/gen'

const HeroContainer = styled.div`
color: #fff;
position: relative;
display: flex;
height: 55rem;
min-width: 135rem;
margin: 0 auto ;
`
const HeroDetailsWrapper = styled.div`
position: relative;
width: 30%;


`


const HeroDetails = styled.div`
position: absolute;
width: 100%;
z-index: 100;
top: 25%;
left: 10%;



`
const HeroTitle = styled.h1`
padding-bottom: 2rem;
font-size: 3rem;
`
const MiscDetails = styled.div`
color: #999999;
font-size: 1.5rem;
padding-bottom: 2rem;`

const HeroOverview = styled.div`
overflow:visible;
padding-bottom: 2rem;
font-size: 1.5rem;
line-height: 2.5rem;
`
const TrailerBtn = styled.div`
position: relative;
display: flex;
padding-bottom: 2rem;
width: 18rem;
height: 5rem;
background-color: #202124;
align-items: center;
padding-left: 5rem;
padding-top: 1.5rem;
cursor: pointer;
font-size: 1.5rem;




`



const HeroImgContainer = styled.div`
position: relative;
width: 70%;

&:after{
    position: absolute;
    content: '';
    z-index: 10;
        background-image: linear-gradient(90deg,#000 0,transparent 50%,transparent);
        top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;

}

`
const HeroImg = styled.img`
position: relative;
width: 100%;
height: 100%;
`




const Hero = () => {
    const [heroData, setHeroData] = useState('')
    const [heroID, setHeroID] = useState('')
    const [heroPoster, setHeroPoster] = useState('')
    const randomNumber = Math.floor(Math.random() * 21)


    useEffect(() => {
        axios.get(trendingMedia)
            .then(res => {
                setHeroData(res.data.results[randomNumber])
                setHeroID(res.data.results[randomNumber].id)
                setHeroPoster(`https://image.tmdb.org/t/p/original/${res.data.results[randomNumber].backdrop_path}`)
            })
    }, [])

    console.log(heroData);
    localStorage.setItem('hero ID', heroID);

    return (

        <HeroContainer>
            <HeroData />
            <HeroDetailsWrapper>
                <HeroDetails>
                    <HeroTitle>{heroData.title || heroData.name}</HeroTitle>
                    <MiscDetails>stars, {heroData.popularity}, seasons, etc</MiscDetails>
                    <HeroOverview>{heroData.overview}</HeroOverview>
                    <TrailerBtn>Watch Trailer</TrailerBtn>

                </HeroDetails>
            </HeroDetailsWrapper>
            <HeroImgContainer>
                <HeroImg src={heroPoster} />
            </HeroImgContainer>
        </HeroContainer>
    )
}

export default Hero
