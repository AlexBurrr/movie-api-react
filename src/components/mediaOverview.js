import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'



const Container = styled.div`
background-color: #141414;
width: 100%;
height: 50rem;
color: #fff;`



const MediaOverview = ({ x }) => {
    const media = x
    const movieInfo = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
    const TVInfo = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`

    const [overviewData, setOverviewData] = useState('')


    useEffect(() => {
        axios.get(media === 'movie' ? movieInfo : TVInfo)
            .then(res => {
                setOverviewData(res.data);
            })
    }, [])


    return (<Container>

        {overviewData.title || overviewData.name}
    </Container>
    )
}

export default MediaOverview
