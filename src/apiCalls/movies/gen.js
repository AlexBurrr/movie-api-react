import React, { useEffect, useState } from 'react'
import { API_KEY, trendingMedia } from '../apiVariables'
import axios from 'axios'





export const HeroData = ({ }) => {
    const [heroData, setHeroData] = useState('')


    useEffect(() => {
        axios.get(trendingMedia)
            .then(res => {
                setHeroData(res.data.results[Math.floor(Math.random() * 21)]);
            })
    }, [])


    return (
        <div>{}</div>
    )


}





export default HeroData
