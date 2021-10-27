import React from "react";
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';
import {
    faChartBar,
    faChartLine,
    faCogs,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import largeLogo from '../../assets/img/logo_tino_transparent.png';
import smallLogo from '../../assets/img/logo_tino_ico_transparent.ico';

const Sidebar = (props) => {

    return (
        <>
            <nav className="navbar-default navbar-static-side" role="navigation" >
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu" style={{ zIndex: 2000 }}>
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <img className="img-logo" src={largeLogo} alt={'logo'}/>
                                {/* <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                    <span className="block m-t-xs font-bold">David Williams</span>
                                    <span className="text-muted text-xs block">Art Director <b className="caret"></b></span>
                                </a> */}
                            </div>
                            <div className="logo-element">
                                <img className="img-logo-small" src={smallLogo} alt={'small logo'}/>
                            </div>
                        </li>
                        {/* menu */}
                        <MenuItem icon={faChartLine} path="/dashboard" navLabel={true} label="Dashboard" />
                        <MenuTree miniNavBarOpen={props.miniNavBarOpen} icon={faCogs} path="/cadastros" label="Cadastros">
                            <MenuItem path="/cadastroPerfis" label="Perfis" />
                            <MenuItem path="/cadastroClientes" label="Clientes" />
                            <MenuItem path="/cadastroUsuarios" label="Usuários" />
                            <MenuItem path="/cadastroParametros" label="Parâmetros" />
                        </MenuTree>
                        <MenuTree miniNavBarOpen={props.miniNavBarOpen} icon={faUser} path="" label="Cliente">
                            <MenuItem path="/importacaoClientes" label="Importação Clientes" />
                            <MenuItem path="/consultaHwSf" label="Consulta HW e SF" />
                            <MenuItem path="/consultaAutomacaoModulo" label="Consulta Automação/Módulo" />
                            <MenuItem path="/consultaLog" label="Consulta Log" />
                        </MenuTree>
                        <MenuTree miniNavBarOpen={props.miniNavBarOpen} icon={faChartBar} path="" label="Relatórios">
                            <MenuItem path="/relatorio1" label="Relatório 1" />
                            <MenuItem path="/relatorio2" label="Relatório 2" />
                        </MenuTree>
                        <MenuTree miniNavBarOpen={props.miniNavBarOpen} icon={faCogs} path="/componentes" label="Componentes">
                            <MenuItem path="/componentesForm" label="Form" />
                            <MenuItem path="/componentesGrid" label="Grid" />
                        </MenuTree>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;
