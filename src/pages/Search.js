import React, { useState } from 'react'
import ScrollToTop from '../components/ScrollToTop';
import styled from 'styled-components'


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
`




const Search = () => {

    const [search, setSearch] = useState('')

    const inputHandler = (e) => {
        setSearch(e.target.value)
    }

    return (
        <PageContainer>
            <ScrollToTop />
            <SearchContainer>
                <SearchInput type='text' onChange={inputHandler} value={search} placeholder='Search for a movie, tv show or person...' />
            </SearchContainer>
            <SearchResultWrapper>
                hi
            </SearchResultWrapper>


        </PageContainer>
    )
}

export default Search
