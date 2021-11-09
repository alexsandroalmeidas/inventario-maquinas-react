import React, { Fragment, useMemo, useState, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Content from '../common/Content';
import PageHeader from '../common/PageHeader';
import TTable from '../components/table/TTable';
import TButton from '../components/buttons/TButton';
import { Link } from 'react-router-dom';

const serverData = [
    {
        id: 1,
        status: "Ativo",
        nome: "Administrador",
        complemento: "Equipe 1"

    },
    {
        id: 2,
        status: "Ativo",
        nome: "Gerente",
        complemento: "Equipe 2"
    },
    {
        id: 3,
        status: "Inativo",
        nome: "Coordenador",
        complemento: "Equipe 3"
    },
];

const PerfisListagem = (props) => {

    const [clientEdit, setClientEdit] = useState({});
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleEditClick = (row) => {
        debugger;
        setShow(true);
        setClientEdit(row.original);
        // history.push('/perfilEdicao?id=1');
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
                                <TButton className="btn btn-default btn-sm" style={{ backgroundColor: "lightgrey" }}>
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
                Header: 'Ação',
                id: 'click-me-TButton',
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
                        <div>
                            <TButton className="btn btn-outline btn-success btn-sm" onClick={() => { handleEditClick(props.row) }}>
                                <FontAwesomeIcon icon={faPencilAlt} />&nbsp;
                                Editar
                            </TButton>

                            {loadInativarTButton()}
                            {loadAtivarTButton()}

                        </div >
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

    const handleRegistration = (data) => console.log(data);

    const handleBack = (errors) => {
        console.log(errors);
    };

    const loadDetails = () => {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">

                        <div className="ibox-content">
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
                                    <Form.Label column sm={4}>
                                        Nome
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control className="form-control" defaultValue={clientEdit.nome} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextComplemento">
                                    <Form.Label column sm={4}>
                                        Complemento
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control className="form-control" defaultValue={clientEdit.complemento} />
                                    </Col>
                                </Form.Group>

                                <TButton variant="btn btn-block btn-outline" onClick={() => {
                                    setShow(false);
                                    setClientEdit({});
                                }}>
                                    Voltar
                                </TButton>

                                <TButton variant="primary">
                                    Salvar
                                </TButton>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Fragment>
                <PageHeader beforeBreadcrumb="Cadastros" title="Perfis" />
                <Content>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Cadastros de Perfis</h5>

                                    <div className='ibox-tools'> </div>
                                </div>
                                {show ?
                                    loadDetails()
                                    :
                                    <TTable
                                        columns={columns}
                                        serverData={serverData}
                                    />
                                }

                            </div>
                        </div>
                    </div>
                </Content>

            </Fragment >

        </>

    )
}

export default PerfisListagem;