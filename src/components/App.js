
import React from "react";
import Login from "./login/Login";
import Register from "./registrar/Registrar";
import AddContato from "./addContato/addContato";
import ListaContato from "./listaContato/listaContato"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./home/home";
import "./App.css";


const App = () =>{

  const contatos = [

    {
      nome: "iago",
      numero: "619811179895"
    },
    {
      nome: "alexia",
      numero: "619898298223"
    },
  ];


  return(
    <div>
      <Home />
    </div>
  )
}

export default App;