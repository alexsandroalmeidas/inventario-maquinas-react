import React, { Fragment, useMemo, useState, useRef } from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Content from '../common/Content';
import PageHeader from '../common/PageHeader';
import TTable from '../components/table/TTable';
import TButton from '../components/buttons/TButton';

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

const ClientesListagem = (props) => {

    const [clientEdit, setClientEdit] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditClick = (row) => {
        setShow(true);
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
                Header: 'Documento',
                accessor: 'documento',
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

    const handleError = (errors) => {
        console.log(errors);
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

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeTButton>
                        <Modal.Title>Detalhes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
                                <Form.Label column sm={4}>
                                    Nome
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.nome} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextDocumento">
                                <Form.Label column sm={4}>
                                    Documento
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.documento} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextTelefone">
                                <Form.Label column sm={4}>
                                    Telefone
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.telefone} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm={4}>
                                    E-mail
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control type="email" className="form-control" defaultValue={clientEdit.email} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextCep">
                                <Form.Label column sm={4}>
                                    CEP
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.cep} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEndereco">
                                <Form.Label column sm={4}>
                                    Endereço
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.endereco} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextNumero">
                                <Form.Label column sm={4}>
                                    Número
                                </Form.Label>
                                <Col sm={8}>
                                    <Form.Control className="form-control" defaultValue={clientEdit.numero} />
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

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <TButton variant="secondary" onClick={handleClose}>
                            Close
                        </TButton> */}
                        <TButton variant="primary" onClick={handleClose}>
                            Salvar
                        </TButton>
                    </Modal.Footer>
                </Modal>

                {/* <Modal ref={modalEdit} >

                    <div class="ibox ">
                        <div class="ibox-title">
                            <h5>Detalhes</h5>
                        </div>
                        <div class="ibox-content">
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextNome">
                                    <Form.Label column sm={4}>
                                        Nome
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control className="form-control" defaultValue={clientEdit.nome} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextDocumento">
                                    <Form.Label column sm={4}>
                                        Documento
                                    </Form.Label>
                                    <Col sm={8}>
                                        <Form.Control className="form-control" defaultValue={clientEdit.documento} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Modal> */}

            </Fragment>

        </>

    )
}

export default ClientesListagem;