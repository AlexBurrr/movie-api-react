import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;
height: auto;
width: 100%;
background-color: #141414;
padding-right: 1rem;
padding-top: 3rem;
&:hover{
    transform: scale(1.02);
    transition: .2s ease-in-out;
}

cursor:pointer;
`




const Card = styled.div`
position: relative;
height: 100%;
width: 20rem;
display: flex;
flex-direction: column;
`
const ActorImg = styled.img`
position: relative;
height: 30rem;
width: 20rem;

`
const ActorName = styled.span`
position: relative;
height: 2.5rem;
width: 20rem;
font-size: 1.4rem;
`
const ActorCharacter = styled.span`
position: relative;
height: 2.5rem;
width: 20rem;
font-size: 1.4rem;
color:#80868A;
`





const ActorCard = ({ image, actorName, actorCharacter }) => {
    return (
        <CardContainer>

            <Card>
                <ActorImg src={image} />
                <ActorName>{actorName}</ActorName>
                <ActorCharacter>{actorCharacter}</ActorCharacter>
            </Card>
        </CardContainer>
    )
}

export default ActorCard
