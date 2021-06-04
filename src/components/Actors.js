import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ActorCard from '../components/ActorCard'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';


const Container = styled.div`
position: relative;
height: 40rem; 
width: 100%;
background-color: #141414;
overflow-x: scroll;

`

const Title = styled.h1`
position: relative;
padding-left: 5rem;
background-color: #141414;
`

const Slider = styled.div`
position: absolute;
display: flex;
padding-left: 5rem;

`
const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;

`

const Actors = ({ x }) => {



    const media = x
    // const [searchID, setSearchID] = useState('')
    // setSearchID(localStorage.getItem('actor ID'))

    const tvActors = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`
    const movieActors = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`
    const [crew, setCrew] = useState([])

    useEffect(() => {

        axios.get(media === 'movie' ? movieActors : tvActors)
            .then(res => {
                setCrew(res.data.cast)

            })
    }, [setCrew])


    console.log(crew);
    return (
        <>
            <ScrollToTop />
            <Title>Cast</Title>
            <Container>

                <Slider>
                    {crew.map((x, index) => (
                        <div onClick={() => { localStorage.setItem('Actors ID', x.id) }} key={index}>
                            <StyledLink to='/actor'>
                                <ActorCard image={`https://image.tmdb.org/t/p/original/${x.profile_path}`} actorName={x.name} actorCharacter={x.character} />

                            </StyledLink>
                        </div>
                    ))}

                </Slider>


            </Container>

        </>

    )
}

export default Actors
