import React from "react";
import { Switch, Route } from "react-router-dom";
import ClientesList from "../../views/clientes/ClientesList";
import Home from "../../views/Home";
import Dashboard from "../../views/dashboards/Dashboard";
import ParametrosList from "../../views/parametros/ParametrosList";
import PerfisList from "../../views/perfis/PerfisList";
import UsuariosListagem from "../../views/usuarios/UsuariosList.js";
import Grids from "./Grids";
import Form from "./Form";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/cadastroPerfis" component={PerfisList} />
            <Route path="/cadastroClientes" component={ClientesList} />
            <Route path="/cadastroUsuarios" component={UsuariosListagem} />
            <Route path="/cadastroParametros" component={ParametrosList} />
            <Route path="/componentesForm" component={Form} />
            <Route path="/componentesGrid" component={Grids} />
            {/* <Route path="*" component={Home} /> */}
        </Switch>
    );
}

export default Routes;