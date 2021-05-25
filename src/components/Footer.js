import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
position: relative;
height: 15rem;
width: 100%;
background-color: #141414;
padding: 5rem;`

const FooterP = styled.p`
padding-bottom: 2rem;
color: #80868A;
font-size: 1.5rem;

`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterP>© 2021 Alexandro Berumen. All rights reserved. </FooterP>
            <FooterP>Designed by Jason Ujma-Alvis, built by me, data provided by TMDb.</FooterP>
        </FooterContainer>
    )
}

export default Footer
