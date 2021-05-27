import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ActorCard from '../components/ActorCard'


const Container = styled.div`
height: 10rem; 
width: 10rem;
`

const Actors = ({ x }) => {



    const media = x
    const [crew, setCrew] = useState([])
    // const credits = `https://api.themoviedb.org/3/movie/${localStorage.getItem('id')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const tvActors = `https://api.themoviedb.org/3/tv/${localStorage.getItem('actors ID')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`
    const movieActors = `https://api.themoviedb.org/3/movie/${localStorage.getItem('actors ID')}/credits?api_key=21ac8eec01fc0e49780c1a2d65e30dc1`

    useEffect(() => {

        axios.get(media === 'movie' ? movieActors : tvActors)
            .then(res => {
                setCrew(res.data.cast)

            })
    }, [])


    console.log(crew);

    return (
        <Container>
            {/* {crew.map((a, index) => (
                <div key={index}>
                    <ActorCard image={`https://image.tmdb.org/t/p/original/${a.profile_path}`} actorCharacter={a.character} actorName={a.name} />

                </div>
            ))} */}

        </Container>
    )
}

export default Actors
