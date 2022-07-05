import React, {useState} from "react"
import "./Login.css"
import {useHistory} from "react-router-dom"
import Register from "../registrar/Registrar"

const Login = ({ setLoginUser}) => {
    const history =useHistory();


    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

  
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" >Login</div>
            <div>ou</div>
            <div className="button" onClick={() => history.push("/register")} >Register</div>
        </div>
    )
}

export default Login