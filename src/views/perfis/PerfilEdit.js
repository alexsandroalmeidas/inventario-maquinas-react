import React from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import TButton from '../../components/buttons/TButton';

const PerfilEdit = (props) => {
    const { perfilEdit, handleClose, show } = props;

    return (
        <>
            <Modal {...props}
                show={show}
                onHide={handleClose}>
                <Modal.Header closeTButton>
                    <Modal.Title>Detalhes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextStatus">
                            <Form.Label column sm={4}>
                                Status
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Label column sm={2}>
                                    {perfilEdit.status}
                                </Form.Label>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPlaintextNome">
                            <Form.Label column sm={4}>
                                Nome
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control className="form-control" defaultValue={perfilEdit.nome} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextComplemento">
                            <Form.Label column sm={4}>
                                Complemento
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control className="form-control" defaultValue={perfilEdit.complemento} />
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

export default PerfilEdit;