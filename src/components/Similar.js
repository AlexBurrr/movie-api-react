import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MediaCard from '../components/MediaCard'


const SimilarContainer = styled.div`

position: relative;
min-width: 135rem;
margin: 0 auto ;
/* width: 93.6vw; */
height: 50rem;
background-color: #141414;
color: #fff;
font-size: 1.3rem;
overflow-x: scroll;

`

const MovieContainer = styled.div`
position: relative;
width:100%;
height: 58rem;
/* background-color: red; */
padding: 5rem;

`

const Title = styled.h1`
position: relative;

`
const TypeContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
display: flex;
overflow-x: scroll;
/* background-color: green; */
`
const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;

`

const CardContainer = styled.div`
position: absolute;
cursor: pointer;
padding-top: 2rem;
display: flex;




`


const Similar = ({ movie }) => {
    const movieurl = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}/similar?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`
    const tvurl = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}/similar?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`
    let x = { movie }
    const [similar, setSimilar] = useState([])

    useEffect(() => {
        axios(x === 'movie' ? movieurl : tvurl)
            .then(res => {
                console.log(res.data)
            })
    }, [])


    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`
    return (
        <SimilarContainer>
            <MovieContainer>
                <Title>More Like This</Title>
                <TypeContainer>

                    <CardContainer>
                        {similar.map((movie, index) => (
                            <span key={index} onClick={() => localStorage.setItem('movie id', `${movie.id}`)}>
                                <StyledLink to='/movieinfo'>
                                    <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                                </StyledLink>

                            </span>


                        ))}

                    </CardContainer>

                </TypeContainer>
            </MovieContainer>

        </SimilarContainer>
    )
}

export default Similar
