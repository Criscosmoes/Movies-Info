import React from 'react'
import styled from "styled-components"; 


const StyledFooter = styled.div`


@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

& {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    border-top: 2px solid gray;
    color: white; 
    height: 100px; 
    font-family: 'montserrat', sans-serif;
}

.copyright {
    margin-left: 4%; 
    font-size: 2rem; 
}

.made--by {
    margin-right: 4%; 
    font-size: 2rem; 
}

a {
    color: white;
    transition: ease-out .3s; 
    font-size: 2.5rem; 
}

a:hover {
    color: orange; 
    transition: ease-in .3s;
    cursor: pointer;
}

a {
    text-decoration: underline; 
}




@media (max-width: 500px){

    & {
        display: flex; 
        justify-content: space-between; 
        align-items: center; 
    }

    .copyright {
        margin-left: 2%; 
        font-size: 1.6rem; 
    }

    .made--by {
        margin-right: 2%; 
        font-size: 1.6rem; 
    }
}


// test

`

const Footer = () => {



    return (
        <StyledFooter>
            <h3 className="copyright">Copyright © 2021</h3>
            <h3 className="made--by">Made By:<br></br> <a href="https://cristian-fernandez.vercel.app/" > Cristian</a> 🙂</h3>
        </StyledFooter>
    )
}

export default Footer
