import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
position: relative;
display: flex;
background-color: red;
height: 50rem;
min-width: 135rem;
margin: 0 auto ;



`
const HeroDetails = styled.div`
position: relative;
width: 40%;
`
const HeroImgContainer = styled.div`
position: relative;
width: 60%;
`
const HeroImg = styled.img``

const Hero = () => {
    return (
        <HeroContainer>
            <HeroDetails>23e2</HeroDetails>
            <HeroImgContainer>23e3
                <HeroImg />
            </HeroImgContainer>
        </HeroContainer>
    )
}

export default Hero
