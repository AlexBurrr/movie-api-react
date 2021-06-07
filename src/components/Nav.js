import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiHome } from 'react-icons/bi';
import { BiCameraMovie } from 'react-icons/bi';
import { BiTv } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';

const NavContainer = styled.div`
position: sticky;
width: 11rem;
height: 100vh;
margin: 0 auto;
background-color: #000000;
border-right: #202124 1px solid;

flex-direction: column;
text-align: center;

ul{
    min-width:100%;
    min-height: 100%;
    text-decoration:none;

    
a{
    text-decoration:none;
    
    
    

    

}



li{
    padding: 28% 0;
    list-style: none;
    text-decoration:none;
    font-size: 3.2rem;
    color: #fff;
    padding-left: 1rem;
    transition: .2s ease-in-out;
    
    &:hover{
        color: #1F98F3;
    }
    
    
}

}

@media(max-width:1200px){
    
position: fixed;
width: 100%;
height: 15rem;
margin: 0 auto;
background-color: #000000;
border-right: #202124 1px solid;
z-index: 100;
text-align: center;
bottom: -1rem;
display: flex;





ul{
    min-width:100%;
    min-height: 100%;
    text-decoration:none;
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-items: center;
   
  

    
a{
    text-decoration:none;


}



li{
    padding: 28% 0;
    list-style: none;
    text-decoration:none;
    font-size: 6em;
    color: #fff;
    padding-left: 1rem;
    transition: .2s ease-in-out;
    height: 10rem;
    

    
    &:hover{
        color: #1F98F3;
        
    }
    
    
}
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

                    <Link to='/search'>
                        <li><BiSearch /></li>
                    </Link>


                </ul>
            </NavContainer>

        </div>
    )
}

export default Nav
