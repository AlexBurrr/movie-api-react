import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ActorCard from '../components/ActorCard'


const Container = styled.div`
position: relative;
height: 60rem; 
width: 100%;
background-color: #141414;
overflow-x: scroll;
`

const Title = styled.h1`
position: relative;
padding-left: 5rem;
`

const Slider = styled.div`
position: absolute;
display: flex;
overflow-x: auto;
padding-left: 5rem;
`


const Actors = ({ x }) => {



    const media = x
    // const [searchID, setSearchID] = useState('')
    // setSearchID(localStorage.getItem('actor ID'))

    const tvActors = `https://api.themoviedb.org/3/tv/${localStorage.getItem('actors ID')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`
    const movieActors = `https://api.themoviedb.org/3/movie/${localStorage.getItem('actors ID')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`
    const [crew, setCrew] = useState([])

    useEffect(() => {

        axios.get(media === 'movie' ? movieActors : tvActors)
            .then(res => {
                setCrew(res.data.cast)

            })
    }, [crew])



    console.log(crew);
    return (
        <Container>
            <Title>Cast</Title>
            <Slider>
                {crew.map((x, index) => (
                    <div key={index}>
                        <ActorCard image={`https://image.tmdb.org/t/p/original/${x.profile_path}`} actorName={x.name} actorCharacter={x.character} />
                    </div>
                ))}

            </Slider>


        </Container>
    )
}

export default Actors
