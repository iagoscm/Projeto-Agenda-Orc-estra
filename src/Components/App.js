
import React from "react";
import Login from "./login/Login";
import Register from "./registrar/Registrar";
import Home from "./home/home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

const App = () =>{

    return(

     <div className="App">
          <Router>
        <Switch>
          <Route exact path="/">
        
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
        
    
    )
}

export default App;