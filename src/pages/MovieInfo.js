import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MovieHero from '../components/MovieHero'

const InfoContainer = styled.div`
color: #fff;
`


const MovieInfo = () => {

    const movieInfo = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`



    useEffect(() => {
        axios.get(movieInfo)
            .then(res => {
                console.log(res.data);
            })
    })


    return (
        <InfoContainer>
            <MovieHero />
        </InfoContainer>
    )
}

export default MovieInfo

