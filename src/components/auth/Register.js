import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        fullName: "",
        isStaff: false
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(createdUser => {
                if (createdUser.hasOwnProperty("id")) {
                    localStorage.setItem("bison_user", JSON.stringify({
                        id: createdUser.id,
                        staff: createdUser.isStaff
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        return fetch(`http://localhost:8088/users?email=${customer.email}`)
            .then(res => res.json())
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <>
        <img className="hero" src="../../images/Banner.svg"></img>
            <form className="form-login" onSubmit={handleRegister}>
                <h1>Please Register</h1>
                <fieldset>
                    <input onChange={updateCustomer}
                        type="text" size="25" id="fullName"
                        placeholder="Name" required autoFocus />
                </fieldset>
                <fieldset>
                    <input onChange={updateCustomer}
                        type="email" size="25" id="email"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <input onChange={(evt) => {
                        const copy = {...customer}
                        copy.isStaff = evt.target.checked
                        setCustomer(copy)
                    }}
                        type="checkbox" id="isStaff" />
                    <label htmlFor="email"> I am an employee </label>
                </fieldset>
                <button type="submit"> Register </button>
            </form>
        </>
    )
}

