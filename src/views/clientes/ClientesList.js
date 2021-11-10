import React, { Fragment, useMemo, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Content from '../../components/common/Content';
import PageHeader from '../../components/common/PageHeader';
import TTable from '../../components/table/TTable';
import TButton from '../../components/buttons/TButton';
import ClienteEdit from './ClienteEdit';

const serverData = [
    {
        id: 1,
        status: "Ativo",
        nome: "Nome da Empresa 01",
        documento: "123.456.789/0001-01",
        telefone: "55-999458659",
        email: "999458659@teste.com.br",
        uf: "SP",
        municipio: "Araraquara",
        cep: "90000-100",
        endereco: "Av. X",
        numero: "666",
        complemento: "Casa branca"

    },
    {
        id: 2,
        status: "Ativo",
        nome: "Nome da Empresa 02",
        documento: "213.456.789/0001-02",
        telefone: "55-998567412",
        email: "998567412@teste.com.br",
        uf: "SP",
        municipio: "Saquarema",
        cep: "90000-100",
        endereco: "Av. X",
        numero: "667",
        complemento: "Casa azul"
    },
    {
        id: 3,
        status: "Inativo",
        nome: "Nome da Empresa 03",
        documento: "321.456.789/0001-03",
        telefone: "55-996532147",
        email: "996532147@teste.com.br",
        uf: "SP",
        municipio: "São Paulo",
        cep: "90000-100",
        endereco: "Av. X",
        numero: "668",
        complemento: "Casa preta"
    },
];

const ClientesList = () => {

    const [clientEdit, setClientEdit] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditClick = (row) => {
        handleShow();
        setClientEdit(row.original);
    };

    const columns = useMemo(
        () => [
            {
                Header: 'Status',
                accessor: 'status',
                Cell: (props) => {
                    const { id, values } = props.row;

                    const loadAtivoTButton = () => {
                        if (values.status === 'Ativo') {
                            return (
                                <TButton className="btn btn-primary btn-sm" >
                                    Ativo
                                </TButton>
                            );
                        }
                    }

                    const loadInativoTButton = () => {
                        if (values.status === 'Inativo') {
                            return (
                                <TButton
                                    className="btn btn-default btn-sm"
                                    style={{ backgroundColor: "lightgrey" }}>
                                    Inativo
                                </TButton>
                            );
                        }
                    }

                    return (
                        <div>
                            {loadInativoTButton()}
                            {loadAtivoTButton()}
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
                id: 'action',
                Cell: (props) => {
                    const { id, values } = props.row;

                    const loadAtivarTButton = () => {
                        if (values.status === 'Ativo') {
                            return (
                                <TButton
                                    className="btn btn-outline btn-danger btn-sm"
                                    onClick={() => handleInactivateClick(props.row)}>
                                    Inativar
                                </TButton>
                            );
                        }
                    }

                    const loadInativarTButton = () => {
                        if (values.status === 'Inativo') {
                            return (
                                <TButton
                                    className="btn btn-outline btn-primary btn-sm"
                                    onClick={() => handleActivateClick(props.row)}>
                                    Ativar
                                </TButton>
                            );
                        }
                    }

                    return (
                        <>
                            <TButton
                                className="btn btn-outline btn-success btn-sm"
                                onClick={() => { handleEditClick(props.row) }}>
                                <FontAwesomeIcon icon={faPencilAlt} />&nbsp;
                                Editar
                            </TButton>

                            {loadInativarTButton()}
                            {loadAtivarTButton()}

                        </>
                    );
                },
            }
        ],
        []
    );

    const handleActivateClick = (row) => {
        // debugger;
    };

    const handleInactivateClick = (row) => {
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
                                </div>

                                <TTable
                                    columns={columns}
                                    serverData={serverData}
                                />
                            </div>
                        </div>
                    </div>
                </Content>

                <ClienteEdit clientEdit={clientEdit} handleClose={handleClose} show={show} />

            </Fragment>

        </>

    )
}

export default ClientesList;