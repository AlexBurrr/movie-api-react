import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



const Container = styled.div`
background-color: #141414;
position: relative;
/* width: 100%; */
/* height: auto; */
min-width: 135rem;
margin: 0 auto ;
color: #fff;`

const InfoContainer = styled.div`
position: relative;
padding: 5rem;
display: flex;
`
const Poster = styled.img`
height: 39rem;
width: 26rem;
`
const TextInfo = styled.div`
position: relative;
padding-left: 5rem;
display: flex;
flex-direction: column;
`
const Storyline = styled.h1`
    display: relative;
    padding-bottom: 3rem;
    
`
const Overview = styled.div`
    display: relative;
    padding-bottom: 3rem;
    width: 90%;
    font-size: 1.5rem;
    
    ;
`
const Spans = styled.span`
    display: relative;
    padding-bottom: 3rem;
    font-size: 1.5rem;
`
const SpansTwo = styled.span`
padding-right: 2%;
font-size: 1.5rem;
`


const MediaOverview = ({ x }) => {
    const media = x
    const movieInfo = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const TVInfo = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`

    const [overviewData, setOverviewData] = useState('')
    const [budget, setBudget] = useState('')
    const [revenue, setRevenue] = useState('')
    const [genres, setGenres] = useState([])
    const [poster, setPoster] = useState('')
    const [networks, setNetworks] = useState([])
    const [languages, setLanguage] = useState([])

    useEffect(() => {
        axios.get(media === 'movie' ? movieInfo : TVInfo)
            .then(res => {
                setOverviewData(res.data);
                setNetworks(res.data.networks);
                setLanguage(res.data.spoken_languages)
                localStorage.setItem('actors ID', res.data.id)

                if (res.data.budget) {
                    setBudget((res.data.budget).toLocaleString())
                }
                if (res.data.revenue) {
                    setRevenue((res.data.revenue).toLocaleString())
                }

                setGenres(res.data.genres)
                setPoster(`https://image.tmdb.org/t/p/original/${res.data.poster_path}`)


            })
    }, [])

    // localStorage.setItem('actors ID', overviewData.id)


    let movieLength = `${Math.floor((overviewData.runtime) / 60)}hr ${(overviewData.runtime % 60)}min`



    return (<Container>

        <InfoContainer>
            <Poster src={poster} />
            {media === 'movie' ? <TextInfo>
                <Storyline>Storyline</Storyline>
                <Overview>{overviewData.overview}</Overview>
                <Spans><SpansTwo>Runtime</SpansTwo> {movieLength}</Spans>
                <Spans><SpansTwo>Budget</SpansTwo>{budget}</Spans>
                <Spans><SpansTwo>Revenue</SpansTwo>{revenue}</Spans>
                <Spans><SpansTwo>Genres</SpansTwo>{genres.map((x, index) => (
                    <span key={index}>{`${x.name},   `}</span>
                ))}</Spans>

            </TextInfo>
                :
                <TextInfo>
                    <Storyline>Storyline</Storyline>
                    <Overview>{overviewData.overview}</Overview>
                    <Spans><SpansTwo>First Aired</SpansTwo> {overviewData.first_air_date}</Spans>
                    <Spans><SpansTwo>Last Aired</SpansTwo>{overviewData.last_air_date}</Spans>
                    <Spans><SpansTwo>Runtime</SpansTwo>{[overviewData.episode_run_time].map((time, index) => (
                        <span key={index}> {` ${time}min`}</span>
                    ))}</Spans>
                    <Spans><SpansTwo>Genres</SpansTwo>{genres.map((x, index) => (
                        <span key={index}>{`${x.name},   `}</span>
                    ))}</Spans>
                    <Spans><SpansTwo>Seasons</SpansTwo>{overviewData.number_of_seasons}</Spans>
                    <Spans><SpansTwo>Episodes</SpansTwo>{overviewData.number_of_episodes}</Spans>
                    <Spans><SpansTwo>Status</SpansTwo>{overviewData.status}</Spans>
                    <Spans><SpansTwo>Language</SpansTwo>{languages.map((language, index) => (
                        <span key={index}>{`${language.english_name}, `}</span>
                    ))}</Spans>
                    <Spans><SpansTwo>Network</SpansTwo>{networks.map((network, index) => (
                        <span key={index}>{`${network.name}, `}</span>
                    ))}</Spans>


                </TextInfo>


            }

        </InfoContainer>
    </Container>
    )
}

export default MediaOverview
