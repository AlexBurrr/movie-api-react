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
overflow-x: scroll;`

const PosterScroll = ({ title, movieTitle, x }) => {
    const [posterData, setPosterData] = useState([])
    const [heroID, setHeroID] = useState('')
    const [poster, setPoster] = useState('')

    useEffect(() => {
        axios.get(trendingMovies)
            .then(res => {
                setPosterData(res.data.results)
                setHeroID(res.data.results.id)
                setPoster(`https://image.tmdb.org/t/p/original${res.data.results.backdrop_path}`)
            })
    }, [])
    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`

    console.log(posterData);
    return (
        <PosterContainer>
            <ScrollTitle>
                {title}
            </ScrollTitle>
            <CardContainer>
                {posterData.map((movie, index) => (
                    <MediaCard key={index} movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />
                ))}
            </CardContainer>



        </PosterContainer>
    )
}

export default PosterScroll
