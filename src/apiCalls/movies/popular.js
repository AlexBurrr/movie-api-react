import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { popularMovies } from '../apiVariables'

export const Popular = () => {

    const [pop, setPop] = useState('')

    useEffect(() => {
        axios.get(popularMovies)
            .then(res => {
                setPop(res.data.results);
            })

    }, [])


    return (
        <div>
            {console.log(pop)}
        </div>
    )
}

export default Popular
