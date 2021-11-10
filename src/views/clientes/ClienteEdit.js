import React from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import TButton from '../../components/buttons/TButton';

const ClienteEdit = ({ clientEdit, handleClose, show }) => {

    return (
        <>
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
                    <TButton variant="btn btn-block btn-outline" onClick={handleClose}>
                        Voltar
                    </TButton>
                    <TButton variant="primary" onClick={handleClose}>
                        Salvar
                    </TButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ClienteEdit;