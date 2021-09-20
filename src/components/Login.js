import React from 'react'
import styled from 'styled-components'

function Login(props) {
    return (
        <Container>
            <Nav>
                <a href= "/">
                    <img src="/images/LinkedIn-Logo.svg" alt="" />
                </a>
            </Nav>
        </Container>
        // <div>
        //     <h1>hello im in login screen </h1>
        // </div>
    )
}


const Container =styled.div`
    padding:0px;
`;
const Nav =styled.nav``;
export default Login
