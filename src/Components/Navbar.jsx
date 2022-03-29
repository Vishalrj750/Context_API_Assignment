import React from "react";
import styled from "styled-components";
import { AuthContext } from "../Contexts/AuthContext";


const NavbarWrapper = styled.div`
display: flex;
flex-direction: row-reverse;
padding: 20px;
background: black;
`

function Navbar() {
    const { isAuth, setIsAuth, setToken } = React.useContext(AuthContext)

    const handleClick = () => {
        if(isAuth) {
            setIsAuth(false)
            setToken("")
        }
    }

    return(
        <NavbarWrapper>
            <button onClick={ handleClick }>{ isAuth ? "Logout" : "Login" }</button>
        </NavbarWrapper>
    )
}

export { Navbar }