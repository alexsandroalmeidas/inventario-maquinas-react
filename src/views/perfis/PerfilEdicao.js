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

const PerfilEdicao = (props) => {
    debugger;

    const [clientEdit, setClientEdit] = useState({});

    return (
        <>
            <Fragment>
                <PageHeader beforeBreadcrumb="Cadastros/Perfis" title="Perfil Edição" />
                <Content>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title">
                                    <h5>Edição de Perfil</h5>

                                    <div className='ibox-tools'> </div>
                                </div>

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

                                </Form>
                            </div>
                        </div>
                    </div>
                </Content>

            </Fragment>

        </>

    )
}

export default PerfilEdicao;