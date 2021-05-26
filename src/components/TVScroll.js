import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MediaCard from './MediaCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { trendingTV } from '../apiCalls/apiVariables'
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
overflow-x: scroll;`

const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;

`



const TVScroll = ({ title }) => {
    const [movieData, setMovieData] = useState([])


    useEffect(() => {
        axios.get(trendingTV)
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
            <CardContainer>
                {movieData.map((movie, index) => (
                    <span key={index} onClick={() => localStorage.setItem('TV id', `${movie.id}`)}>
                        <StyledLink to='/tvinfo'>
                            <MediaCard movieTitle={movie.name} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                        </StyledLink >

                    </span>
                ))}
            </CardContainer>



        </PosterContainer>
    )
}

export default TVScroll
