import React, { useState, useEffect } from 'react'
import ScrollToTop from '../components/ScrollToTop';
import styled from 'styled-components'
import axios from 'axios'
import MediaCard from '../components/MediaCard';
import { Link } from 'react-router-dom'



const PageContainer = styled.div`
position: relative;
width: 100%;
min-width: 135rem;
margin: 0 auto ;
`

const SearchContainer = styled.div`
display: flex;
width: 100%;
height: 10rem;
text-align: center;
background-color: red;
color: #fff;
`
const SearchInput = styled.input`
background-color: #141414;
color: #fff;
width: 100%;
padding-left: 5rem;
font-size: 1.5rem;
border: none;

&:focus{
    outline: none;
}
`
const SearchResultWrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
color: #fff;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const SearchDiv = styled.div`
display: relative;
padding: 1rem;

`
const StyledLink = styled(Link)`

color: #fff;
text-decoration: none;

`


const Search = () => {
    const [search, setSearch] = useState([''])
    const [searchResult, setSearchResult] = useState([])
    const inputHandler = (e) => {
        setSearch(e.target.value)

    }
    const imageurl = `https://image.tmdb.org/t/p/w370_and_h556_bestv2`

    const url = `https://api.themoviedb.org/3/search/multi?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US&query=${search}&include_adult=false`

    useEffect(() => {
        axios(url)
            .then(res => {
                setSearchResult(res.data.results)
            })

    }, [search])


    console.log(searchResult);
    console.log(search);

    return (
        <PageContainer>
            <ScrollToTop />
            <SearchContainer>
                <SearchInput type='text' onChange={inputHandler} value={search} placeholder='Search for a movie, tv show or person...' />
            </SearchContainer>
            <SearchResultWrapper>
                {searchResult.map((movie, index) => (
                    <StyledLink to={movie.media_type === 'movie' ? '/movieinfo' : '/tvinfo'} onClick={() => localStorage.setItem(movie.media_type === 'movie' ? ('movie id') : ('TV id'), movie.id)}>
                        <SearchDiv key={index} >
                            <MediaCard movieTitle={movie.title || movie.name} rating={movie.vote_average / 2} image={imageurl + movie.poster_path} />
                        </SearchDiv>
                    </StyledLink>

                ))}
            </SearchResultWrapper>


        </PageContainer>
    )
}

export default Search
