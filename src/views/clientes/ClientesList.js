import React, { Fragment, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm, FormProvider, useFormContext } from "react-hook-form";
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
        uf: "AL",
        municipio: "Capela",
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
        uf: "MG",
        municipio: "Arapuá",
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
    const methods = useForm();
    const onSubmit = data => console.log(data);

    const columns = useMemo(() => {

        const handleEditClick = (row) => {
            setClientEdit(row.original);
            handleShow();
        };

        return ([
            {
                Header: 'Status',
                accessor: 'status',
                Cell: (props) => {
                    const { values } = props.row;

                    const loadAtivoTButton = () => {
                        if (values.status === 'Ativo') {
                            return (
                                <TButton
                                    className="btn btn-primary btn-sm"
                                    style={{ cursor: "default" }}>
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
                                    style={{ backgroundColor: "lightgrey", cursor: "default" }}>
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
                    const { values } = props.row;

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
        ])
    },
        []
    );

    const handleActivateClick = (row) => {
        // debugger;
    };

    const handleInactivateClick = (row) => {
        // debugger;
    };

    const handleSubmitEdit = () => {
        console.log("handleSubmitEdit");
    }

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

                <FormProvider {...methods} > // pass all methods into the context
                    <ClienteEdit
                        client={clientEdit}
                        onHide={handleClose}
                        show={show}
                        carregarCliente={true} 
                        onSubmit={methods.handleSubmit(onSubmit)}/>
                </FormProvider>

            </Fragment>

        </>

    )
}

export default ClientesList;