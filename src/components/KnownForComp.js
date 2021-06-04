import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import MediaCard from './MediaCard'
import { Link } from 'react-router-dom'


const Container = styled.div`
position: relative;
padding: 1rem;




background-color: #141414;

`

const Title = styled.h1`
padding-left: 2rem;
padding-bottom: 2rem;
`

const MediaWrapper = styled.div`
display: flex;
flex-wrap: wrap;

`
const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;

`


const KnownForComp = () => {
    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`
    const url = `https://api.themoviedb.org/3/person/${localStorage.getItem('Actors ID')}/combined_credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const [knownFor, setKnownFor] = useState([])


    useEffect(() => {
        axios(url)
            .then(res => {
                setKnownFor(res.data.cast);
            })
    }, [])
    console.log(knownFor);

    return (
        <Container>
            <Title>Also In</Title>
            <MediaWrapper>

                {knownFor.map((movie, index) => (
                    <StyledLink to={`${movie.media_type === 'movie' ? '/movieinfo' : '/tvinfo'}`}>
                        <div key={index} style={{ marginBottom: '5rem' }} onClick={() => { localStorage.setItem(movie.media_type === 'movie' ? 'movie id' : 'TV id', movie.id) }} >
                            <MediaCard movieTitle={movie.title || movie.name} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />
                        </div>
                    </StyledLink>

                ))}


            </MediaWrapper>

        </Container>
    )
}

export default KnownForComp
