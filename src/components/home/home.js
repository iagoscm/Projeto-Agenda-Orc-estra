import React from "react";
import "./home.css"
import Navbar from "./navbar"
import AddContato from "../addContato/addContato";
import ListaContato from "../listaContato/listaContato";
import { ButtonGroup, Button } from "reactstrap";

const Home = ()=>{

    return (
        <div>
            <Navbar />
            <AddContato />
            <Button color="success">Editar</Button>
            <Button color="success">Excluir</Button>
       </div>
    )
}

export default Home;