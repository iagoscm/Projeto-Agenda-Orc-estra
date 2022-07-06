
import React from "react";
import Login from "./login/Login";
import Register from "./registrar/Registrar";
import addContato from "./addContato/addContato";
import listaContato from "./listaContato/listaContato"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./home/home";
import "./App.css";


const App = () =>{

  return(
    <div>
      <Home />
    </div>
  )

    /*return(
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Routes>
      </div>
    </Router>
    
    )*/
}

export default App;