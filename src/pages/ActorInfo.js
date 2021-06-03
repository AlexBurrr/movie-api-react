import React from 'react'
import styled from 'styled-components'


const ActorContainer = styled.div`
position: relative;
width: 100%;
height: 100%;
color:#fff;
background-color: red;
padding: 5rem;
`
const ActorWrapper = styled.div`
position: relative;
width: 100%;
background-color: blue;
height: 100%;
display: flex;
`

const ActorImgContainer = styled.div`
position: relative;
width: 25%;
height: 39rem;
background-color: yellow;
margin-right: 5rem;
`
const ActorPicture = styled.img``

const ActorDetials = styled.section`
position: relative; 
width: 75%;
height: auto;
background-color: magenta;
`


const ActorInfo = () => {
    return (
        <ActorContainer>
            <ActorWrapper>
                <ActorImgContainer>
                    <ActorPicture alt='who?' />
                </ActorImgContainer>

                <ActorDetials>details</ActorDetials>
            </ActorWrapper>
        </ActorContainer>
    )
}

export default ActorInfo
