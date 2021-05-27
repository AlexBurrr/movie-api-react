import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import MovieHero from '../components/MovieHero'
import MediaOverview from '../components/MediaOverview'
import Footer from '../components/Footer'
import Actors from '../components/Actors'

const InfoContainer = styled.div`
color: #fff;
`


const MovieInfo = () => {

    const movieInfo = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`

    const [movieData, setMovieData] = useState('')

    useEffect(() => {
        axios.get(movieInfo)
            .then(res => {
                setMovieData(res.data);
            })
    }, [])
    console.log(movieData);

    return (
        <InfoContainer>
            <MovieHero />
            <MediaOverview x={'movie'} />
            <Actors x={'movie'} />
            <Footer />

        </InfoContainer>
    )
}

export default MovieInfo

