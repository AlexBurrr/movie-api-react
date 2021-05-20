import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi';
import { BiCameraMovie } from 'react-icons/bi';
import { BiTv } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';

const NavContainer = styled.div`
position: sticky;
min-width: 10rem;
height: 100vh;
background-color: #000000;
border-right: #202124 1px solid;
display: flex;
flex-direction: column;
text-align: center;

ul{
    min-width:100%;
    min-height: 100%;
    background-color: red;
    text-decoration:none;

    
a{
    text-decoration:none;
    
    
    

    

}



li{
    margin: 50% 0;
    list-style: none;
    text-decoration:none;
    font-size: 3.2rem;
    color: #fff;
    
    
    
    
}

}
`



const Nav = () => {
    return (
        <div>
            <NavContainer>
                <ul>
                    <Link to='/' exact>
                        <li><BiHome /></li>
                    </Link>
                    <Link to='/movies'>
                        <li><BiCameraMovie /></li>

                    </Link>
                    <Link to='/tv'>
                        <li><BiTv /></li>

                    </Link>

                    <li><BiSearch /></li>


                </ul>
            </NavContainer>

        </div>
    )
}

export default Nav
