import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("melissa@email.com")
    const navigate = useNavigate()

    //login button: makes a fetch call to JSON server to find a user with matching email. if valid email, in local storage setItem bisonUser with two properties, id and staff
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`) //looking at users collection to find anyone who matches this email
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("bison_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))
                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <>
        <img className="hero" src="../../images/Banner.svg"></img>
            <form className="form-login" onSubmit={handleLogin}>
                <h1>Please sign in</h1>
                <fieldset>
                    <input type="email"
                        value={email}
                        size="25"
                        onChange={evt => set(evt.target.value)}
                        placeholder="Email address"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <Link className="membership" to="/register">Not a member yet?</Link>
                </fieldset>
                    <button type="submit">
                        Sign in
                    </button>
            </form>
        </>
    )
}

