import './App.css'
import Table from './home/Table';
import Login from './login/login'
import Registrar from './registrar/Registrar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const App = ()=>{

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
    
        <Routes>
          <Route exact path="/home" element={<Table/>}/>
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route exact path="/register" element={<Registrar/>}/>

        </Routes>


    
      </Router>
    </div>
  );
}
export default App;