import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MediaCard from './MediaCard'
import axios from 'axios'
import { trendingMovies } from '../apiCalls/apiVariables'

const PosterContainer = styled.div`
position: relative;
width: 100%;
height: 60rem;
background-color: #141414;
padding: 5rem;
color: #fff;
font-size: 1.3rem;
overflow-x: scroll;
`
const ScrollTitle = styled.h1``

const CardContainer = styled.div`
position: absolute;
cursor: pointer;
padding-top: 2rem;
display: flex;
`

const PosterScroll = ({ title }) => {
    const [movieData, setMovieData] = useState([])


    useEffect(() => {
        axios.get(trendingMovies)
            .then(res => {
                setMovieData(res.data.results)
            })
    }, [])
    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`

    console.log(movieData);
    return (
        <PosterContainer>
            <ScrollTitle>
                {title}
            </ScrollTitle>
            <CardContainer >
                {movieData.map((movie, index) => (
                    <span key={index} onClick={() => localStorage.setItem('id', `${movie.id}`)}>
                        <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                    </span>


                ))}
            </CardContainer>



        </PosterContainer>
    )
}

export default PosterScroll
