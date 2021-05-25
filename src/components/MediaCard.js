import React from 'react'
import styled from 'styled-components'
import ReactStars from 'react-stars'


const CardContainer = styled.div`
position: relative;
width: 25rem;
height: 43rem;
border: none;
margin: .5rem;

&:hover{
    transform: scale(1.02);
    transition: .2s ease-in-out;
}
`
const CardImgWrapper = styled.div`
position: relative;
max-width: 100%;
min-height: 84%;
`

const CardImg = styled.img`
width: 100%;
height: 100%;
padding-bottom: 1rem;

`

const MovieTitle = styled.h2`
font-size: 1.4rem;
padding-bottom: 1rem;
`

const mediaCard = ({ movieTitle, rating, image }) => {
    return (

        <CardContainer >
            <CardImgWrapper>
                <CardImg src={image} />
            </CardImgWrapper>

            <MovieTitle>{movieTitle}</MovieTitle>
            <ReactStars
                count={5}
                value={rating}
                size={15}
                edit={false}
                color2={'#2097F3'} />


        </CardContainer>
    )
}

export default mediaCard
