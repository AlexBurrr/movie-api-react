import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import KnownForComp from '../components/KnownForComp';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const ActorContainer = styled.div`
position: relative;
width: 100%;
height: 80%;
color:#fff;

background-color: #141414;
`
const ActorWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
display: flex;
padding: 5rem;
`

const ActorImgContainer = styled.div`
position: relative;
width: 26rem;
height: 39rem;
margin-right: 5rem;
`
const ActorPicture = styled.img`
position: relative;
width: 100%;
height: 100%;
`

const ActorDetials = styled.section`
position: relative; 
width: 75%;
height: 100%;
display: flex; 
flex-direction: column;
`
const ActorName = styled.h1`
margin-bottom: 2rem;
font-size: 2.2rem;
font-weight: 400;
letter-spacing:.05rem;
`
const ActorBiography = styled.span`
position: relative;
font-size:1.5rem;
line-height: 2rem;
padding-bottom: 5rem;
`

const KnownFor = styled.span`
position: relative;
display: flex;
width: 10%;

width: 100%;
font-size:1.5rem;
padding-bottom: 2rem;
`
const Born = styled.span`
display: flex;
font-size:1.5rem;
padding-bottom: 2rem;


`
const PlaceOfBirth = styled.span`
display: flex;
font-size:1.5rem;
padding-bottom: 2rem;

`

const Label = styled.div`
font-size:1.5rem;
padding-right: 2rem;


`

const ActorInfo = () => {
    const url = `https://api.themoviedb.org/3/person/${localStorage.getItem('Actors ID')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const [actorInfo, setActorInfo] = useState([])

    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`



    useEffect(() => {
        axios(url)
            .then(res => {
                setActorInfo(res.data);
            })
    }, [])
    console.log(actorInfo);
    return (
        <ActorContainer>
            <ScrollToTop />
            <ActorWrapper>
                <ActorImgContainer>
                    <ActorPicture src={imageurl + actorInfo.profile_path} alt='who?' />
                </ActorImgContainer>

                <ActorDetials>
                    <ActorName>{actorInfo.name}</ActorName>
                    <ActorBiography>{actorInfo.biography}</ActorBiography>
                    <KnownFor><Label>Known for:</Label>{actorInfo.known_for_department}</KnownFor>
                    <Born><Label>Born:</Label>{actorInfo.birthday}</Born>
                    <PlaceOfBirth><Label>Place of Birth:</Label>{actorInfo.place_of_birth}</PlaceOfBirth>

                </ActorDetials>
            </ActorWrapper>
            <KnownForComp />
            <Footer />
        </ActorContainer>
    )
}

export default ActorInfo
