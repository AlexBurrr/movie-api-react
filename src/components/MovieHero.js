
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactStars from 'react-stars'


const HeroContainer = styled.div`
color: #fff;
position: relative;
display: flex;
height: 53.5rem;
min-width: 135rem;
margin: 0 auto ;
`
const HeroDetailsWrapper = styled.div`
position: relative;
width: 25%;


`


const HeroDetails = styled.div`
position: absolute;
width: 140%;
z-index: 100;
top: 20%;
left: 15%;



`
const HeroTitle = styled.h1`
padding-bottom: 2rem;
font-size: 3.5rem;
`
const MiscDetails = styled.div`
display: flex;
color: #999999;
font-size: 1.5rem;
padding-bottom: 2rem;

`

const HeroOverview = styled.div`
overflow: visible; 
    padding-bottom: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
   
    height: 20rem;
`
const TrailerBtn = styled.div`
position: relative;
display: flex;
padding-bottom: 2rem;
width: 18rem;
height: 5rem;
background-color: #202124;
align-items: center;
padding-left: 4.5rem;
padding-top: 2rem;
cursor: pointer;
font-size: 1.5rem;

transition: .2s ease-in-out;

&:hover{
    opacity: .9;
    color: #1F98F3;
}

`



const HeroImgContainer = styled.div`
position: relative;
width: 75%;

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


const MiscSpan = styled.span`
position: relative;
margin-left: 2rem;
margin-bottom: -10rem;
z-index: 100;
`



const HeroID = () => {
    const [heroData, setHeroData] = useState('')
    const [heroPoster, setHeroPoster] = useState('')


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`)
            .then(res => {
                setHeroData(res.data)
                setHeroPoster(`https://image.tmdb.org/t/p/original/${res.data.backdrop_path}`)
            })
    }, [])
    // console.log(movieInfo);
    // console.log(heroData);

    return (
        <HeroContainer>

            <HeroDetailsWrapper>
                <HeroDetails>
                    <HeroTitle>{heroData.title}</HeroTitle>
                    <MiscDetails>
                        <ReactStars
                            count={5}
                            value={heroData.vote_average / 2}
                            size={15}
                            edit={false}
                            color2={'#2097F3'} />
                        <MiscSpan className='hero-misc'> {heroData.vote_count} reviews, {heroData.release_date || heroData.first_air_date}</MiscSpan>

                    </MiscDetails>
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

export default HeroID
