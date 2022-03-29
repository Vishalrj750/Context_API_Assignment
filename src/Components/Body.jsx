import React from "react";
import { AuthContext } from "../Contexts/AuthContext";

function Body() {
    const { toggleAuth } = React.useContext(AuthContext)
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: ""
    })

    const { email, password } = formDetails

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormDetails({
            ...formDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://reqres.in/api/login`, {
            method: "POST",
            body: JSON.stringify(formDetails),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => res.json())
        .then((res) => toggleAuth( res.token ))
        .catch((err) => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange} />
            <br />
            <input type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange} />
            <br />
            <input type="submit" value={"SUBMIT"} />
        </form>
    )
}

export { Body }