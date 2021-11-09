import React, { Fragment, useMemo, useState, useRef } from 'react';
import Content from '../common/Content';
import PageHeader from '../common/PageHeader';
import TTable from '../components/table/TTable';
import Button from '../components/buttons/Button';
import Modal from '../components/modals/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const serverData = [
    { "status": "Ativo", "nome": "Nome da Empresa 01", "documento": "123.456.789/0001-01" },
    { "status": "Ativo", "nome": "Nome da Empresa 02", "documento": "213.456.789/0001-02" },
    { "status": "Inativo", "nome": "Nome da Empresa 03", "documento": "321.456.789/0001-03" },
];

function ClientesListagem(props) {

    const modal1 = useRef(null);
    const modal2= useRef(null);

    const columns = useMemo(
        () => [
            {
                Header: 'Status',
                accessor: 'status',
                Cell: (props) => {
                    const { id, values } = props.row;

                    const loadAtivoButton = () => {
                        if (values.status === 'Ativo') {
                            return (
                                <Button className="btn btn-primary btn-sm" >
                                    Ativo
                                </Button>
                            );
                        }
                    }

                    const loadInativoButton = () => {
                        if (values.status === 'Inativo') {
                            return (
                                <Button className="btn btn-default btn-sm" style={{ backgroundColor: "lightgrey" }}>
                                    Inativo
                                </Button>
                            );
                        }
                    }

                    return (
                        <div>
                            {loadInativoButton()}
                            {loadAtivoButton()}
                        </div >
                    );
                },
            },
            {
                Header: 'Nome',
                accessor: 'nome',
            },
            {
                Header: 'Documento',
                accessor: 'documento',
            },
            {
                Header: 'Ação',
                id: 'click-me-button',
                Cell: (props) => {
                    const { id, values } = props.row;

                    const loadAtivarButton = () => {
                        if (values.status === 'Ativo') {
                            return (
                                <Button
                                    className="btn btn-outline btn-danger btn-sm"
                                    onClick={() => handleInativarButtonClick(props.row)}>
                                    Inativar
                                </Button>
                            );
                        }
                    }

                    const loadInativarButton = () => {
                        if (values.status === 'Inativo') {
                            return (
                                <Button
                                    className="btn btn-outline btn-primary btn-sm"
                                    onClick={() => handleAtivarButtonClick(props.row)}>
                                    Ativar
                                </Button>
                            );
                        }
                    }

                    return (
                        <div>
                            <Button className="btn btn-outline btn-success btn-sm" onClick={() => handleButtonClick(props.row)}>
                                <FontAwesomeIcon icon={faPencilAlt} />&nbsp;
                                Editar
                            </Button>

                            {loadInativarButton()}
                            {loadAtivarButton()}

                        </div >
                    );
                },
            }
        ],
        []
    );


    const handleButtonClick = (row) => {
        // debugger;
    };

    const handleAtivarButtonClick = (row) => {
        // debugger;
    };

    const handleInativarButtonClick = (row) => {
        // debugger;
    };

    return (
        <>
            <Fragment>
                <PageHeader beforeBreadcrumb="Cadastros" title="Clientes" />
                <Content>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Cadastros de Clientes</h5>

                                    <div className='ibox-tools'> </div>

                                    <Button onClick={() => { modal1.current.open() }}>I'm a modal 1</Button>
                                    <Button onClick={() => { modal2.current.open() }}>I'm a modal 2</Button>
                                </div>

                                <TTable
                                    columns={columns}
                                    serverData={serverData}
                                />
                            </div>
                        </div>
                    </div>
                </Content>

                <Modal ref={modal1} >
                    <h1>Teste 1</h1>
                </Modal>

                <Modal ref={modal2} >
                    <h1>Teste 2</h1>
                </Modal>

            </Fragment>

        </>

    )
}

export default ClientesListagem;