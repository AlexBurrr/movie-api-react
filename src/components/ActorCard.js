import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;
height: auto;
width: 100%;
background-color: #141414;
padding: 5rem;

`

const Title = styled.h1`
padding-bottom: 3rem;

`

const Card = styled.div`
position: relative;
height: 35rem;
width: 20rem;
display: flex;
flex-direction: column;
`
const ActorImg = styled.img`
position: relative;
height: 30rem;
width: 20rem;
background-color: red;

`
const ActorName = styled.span`
position: relative;
height: 2.5rem;
width: 20rem;
background-color: blue;`
const ActorCharacter = styled.span`
position: relative;
height: 2.5rem;
width: 20rem;
background-color: yellow;`

const ActorCard = ({ image, actorName, actorCharacter }) => {
    return (
        <CardContainer>
            <Title>Cast</Title>
            <Card>
                <ActorImg src={image} />
                <ActorName>{ActorName}</ActorName>
                <ActorCharacter>{ActorCharacter}</ActorCharacter>
            </Card>
        </CardContainer>
    )
}

export default ActorCard
