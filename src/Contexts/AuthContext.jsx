import React from "react";

export const AuthContext = React.createContext()

export function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth] = React.useState(false)
    const [token, setToken] = React.useState("")

    const toggleAuth = (token) => {
        setIsAuth(true)
        setToken(token)
    }

    return(
        <AuthContext.Provider value={{ isAuth, setIsAuth, setToken, token, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}