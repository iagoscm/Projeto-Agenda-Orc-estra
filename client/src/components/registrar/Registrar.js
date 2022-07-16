import React, { useState } from "react"
import "./Registrar.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Registrar = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("Escreva algo no campo abaixo")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Registrar</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Registrar</div>
            <div>or</div>
            <div className="button" onClick={() => history("/login")}>Login</div>
        </div>
    )
}

export default Registrar