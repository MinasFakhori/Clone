import React, { Component } from 'react';
import styled from 'styled-components';
import './../css/Navbar.css';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className='navbar fixed-top'>
                    <Wrap>
                       
                        <img a href = "#"src="img/icons/apple.svg" alt="" />
                        <NavText> Store</NavText>
                        <NavText> Mac</NavText>
                        <NavText> iPad</NavText>
                        <NavText> iPhone</NavText>
                        <NavText> Watch</NavText>
                        <NavText> AirPods</NavText>
                        <NavText> TV & Home</NavText>
                        <NavText> Only on Apple</NavText>
                        <NavText> Accessories</NavText>
                        <NavText> Support</NavText>
                        <img a href = "#"src="img/icons/search.svg" alt="" />
                        <img a href = "#"src="img/icons/bag.svg" alt="" />
                    </Wrap>
                </nav>
          
            </div>
        );
    }
}
 
export default Navbar;

const Wrap = styled.div`
    color : #ffffff;
    display:block;
    margin-left:auto;
    margin-right:auto;

    `;



const NavText = styled.span`
     font-size : 12px;
     margin : 0 20px 0 20px;
     
     &:hover{
         color:red;
     }
`;

