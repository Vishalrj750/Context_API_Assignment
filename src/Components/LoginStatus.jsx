import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

function LoginStatus() {
    const { isAuth } = React.useContext(AuthContext)

    return(
        <div>
            <h1>Login Status</h1>
            <h3>{ isAuth ? " Login Successfull " : " You ar not Logged in " }</h3>
        </div>
    )
}

export { LoginStatus }