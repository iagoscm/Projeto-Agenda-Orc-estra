import React, {useState} from "react"
import "./Inicio.css"
import { useNavigate } from "react-router-dom"

const Inicio = () => {

    const history = useNavigate()

    return (
        <div className="Inicio">
        <h1>Projeto Agenda!</h1>
        <div className="button" onClick={() => history("/home")}>Agenda</div>
        <div className="button" onClick={() => history("/login")}>Login</div>
        <div className="button" onClick={() => history("/register")}>Registrar</div>
        </div>
    )
}

export default Inicio