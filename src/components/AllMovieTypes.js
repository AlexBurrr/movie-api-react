import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MediaCard from '../components/MediaCard'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Container = styled.div`
position: relative;
width: 93.6vw;
height: 240rem;
background-color: #141414;
color: #fff;
font-size: 1.3rem;
overflow-x: scroll;
`
const CardContainer = styled.div`
position: absolute;
cursor: pointer;
padding-top: 2rem;
display: flex;




`
const TypeContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
display: flex;
overflow-x: scroll;
/* background-color: green; */
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
const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;

`



const AllMovieTypes = () => {
    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`



    const popular = `https://api.themoviedb.org/3/movie/popular?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`
    const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`
    const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`
    const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&page=1`

    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        axios.get(popular)
            .then(res => {
                setPopularMovies(res.data.results)
            })
    }, [])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    useEffect(() => {
        axios.get(topRated)
            .then(res => {
                setTopRatedMovies(res.data.results)
            })
    }, [])
    const [upcomingMovies, setupcomingMovies] = useState([])
    useEffect(() => {
        axios.get(upcoming)
            .then(res => {
                setupcomingMovies(res.data.results)
            })
    }, [])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    useEffect(() => {
        axios.get(nowPlaying)
            .then(res => {
                setNowPlayingMovies(res.data.results)
            })
    }, [])






    return (


        <Container>

            <MovieContainer>
                <Title>Popular Movies</Title>
                <TypeContainer>

                    <CardContainer>
                        {popularMovies.map((movie, index) => (
                            <span key={index} onClick={() => localStorage.setItem('movie id', `${movie.id}`)}>
                                <StyledLink to='/movieinfo'>
                                    <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                                </StyledLink>

                            </span>


                        ))}

                    </CardContainer>

                </TypeContainer>
            </MovieContainer>
            <MovieContainer>
                <Title>Top Rated Movies</Title>
                <TypeContainer>

                    <CardContainer>
                        {topRatedMovies.map((movie, index) => (
                            <span key={index} onClick={() => localStorage.setItem('movie id', `${movie.id}`)}>
                                <StyledLink to='/movieinfo'>
                                    <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                                </StyledLink>

                            </span>


                        ))}

                    </CardContainer>

                </TypeContainer>
            </MovieContainer>
            <MovieContainer>
                <Title>Upcoming Movies</Title>
                <TypeContainer>

                    <CardContainer>
                        {upcomingMovies.map((movie, index) => (
                            <span key={index} onClick={() => localStorage.setItem('movie id', `${movie.id}`)}>
                                <StyledLink to='/movieinfo'>
                                    <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                                </StyledLink>

                            </span>


                        ))}

                    </CardContainer>

                </TypeContainer>
            </MovieContainer>
            <MovieContainer>
                <Title>Now Playing Movies</Title>
                <TypeContainer>

                    <CardContainer>
                        {nowPlayingMovies.map((movie, index) => (
                            <span key={index} onClick={() => localStorage.setItem('movie id', `${movie.id}`)}>
                                <StyledLink to='/movieinfo'>
                                    <MediaCard movieTitle={movie.title} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />

                                </StyledLink>

                            </span>


                        ))}

                    </CardContainer>

                </TypeContainer>
            </MovieContainer>



        </Container>



    )





}

export default AllMovieTypes
