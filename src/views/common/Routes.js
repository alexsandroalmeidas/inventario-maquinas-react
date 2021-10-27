import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientesListagem from "../clientes/ClientesListagem";
import Home from "../Home";
import Dashboard from "../dashboards/Dashboard";
import ParametrosListagem from "../parametros/ParametrosListagem";
import PerfisListagem from "../perfis/PerfisListagem";
import UsuariosListagem from "../usuarios/UsuariosListagem";
import Grids from "./Grids";
import Form from "./Form";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/cadastroPerfis" component={PerfisListagem} />
            <Route path="/cadastroClientes" component={ClientesListagem} />
            <Route path="/cadastroUsuarios" component={UsuariosListagem} />
            <Route path="/cadastroParametros" component={ParametrosListagem} />
            <Route path="/componentesForm" component={Grids} />
            <Route path="/componentesGrid" component={Form} />
            {/* <Route path="*" component={Home} /> */}
        </Switch>
    );
}

export default Routes;