import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import TButton from '../../components/buttons/TButton';
import Estados from '../../components/selects/Estados';
import InputMask from "react-input-mask";

const FIRST_COLUMN = 2;
const SECOND_COLUMN = 10;

const ClienteEdit = ({ client, onHide, show, carregarCliente, ...rest }) => {

    const [validated, setValidated] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [municipio, setMunicipio] = useState("");
    const [selectedEstadoOption, setSelectedEstadoOption] = useState();
    const [listCity, setListCity] = useState([]);

    useEffect(() => {
        if (selectedEstadoOption) {
            const loadCities = (id) => {
                let url = 'https://servicodados.ibge.gov.br/api/v1/';
                url = url + `localidades/estados/${id}/municipios`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        data.sort((a, b) => a.nome.localeCompare(b.nome));
                        setListCity([...data]);
                        if (client.municipio)
                            setMunicipio(client.municipio);
                    });
            };

            loadCities(selectedEstadoOption);
        }
    }, [selectedEstadoOption, setMunicipio, client.municipio]);

    useEffect(() => {
        if (closeModal) {
            onHide();
        }
    }, [closeModal, onHide]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

            // obtém as tarefas
            const clientesDb = localStorage['clientes'];
            let clientes = clientesDb ? JSON.parse(clientesDb) : [];
            // persistir a tarefa atualizada
            clientes = clientes.map(cli => {
                if (cli.id === parseInt(client.id)) {
                    cli.status = client.status;
                    cli.nome = form.nome.value;
                    cli.documento = form.documento.value;
                    cli.telefone = form.telefone.value;
                    cli.email = form.email.value;
                    cli.endereco = form.endereco.value;
                    cli.numero = form.numero.value;
                    cli.complemento = form.complemento.value;
                }
                return cli;
            });

            localStorage['clientes'] = JSON.stringify(clientes);

            // setCloseModal(true);
        }

        setValidated(true);
    };

    return (
        <>
            <Modal {...rest}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}>
                <Modal.Header>
                    <Modal.Title>Detalhes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm={FIRST_COLUMN}>
                                Status
                            </Form.Label>
                            <Col sm={SECOND_COLUMN}>
                                <Form.Label column sm={4}>
                                    {client.status}
                                </Form.Label>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom01" >
                            <Form.Label column sm={FIRST_COLUMN}>
                                Nome
                            </Form.Label>
                            <Col sm={SECOND_COLUMN}>
                                <Form.Control
                                    required
                                    name="nome"
                                    type="text"
                                    defaultValue={client.nome} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um Nome.</small>
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom02">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Documento
                            </Form.Label>
                            <Col sm={4}>
                                <InputMask
                                    required
                                    name="documento"
                                    className="form-control"
                                    mask="99.999.999/9999-99"
                                    defaultValue={client.documento} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um Documento.</small>
                                </Form.Control.Feedback>
                            </Col>

                            <Form.Label column lg={FIRST_COLUMN}>
                                Telefone
                            </Form.Label>
                            <Col sm={4}>
                                <InputMask
                                    required
                                    className="form-control"
                                    name="telefone"
                                    mask="(99) 9 9999-9999"
                                    defaultValue={client.telefone} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um Telefone.</small>
                                </Form.Control.Feedback>
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom03">
                            <Form.Label column sm={FIRST_COLUMN}>
                                E-mail
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    defaultValue={client.email} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um E-mail.</small>
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom04">
                            <Form.Label column lg={FIRST_COLUMN}>
                                CEP
                            </Form.Label>
                            <Col sm={2}>
                                <InputMask
                                    required
                                    className="form-control"
                                    name="cep"
                                    mask="99999-999"
                                    defaultValue={client.cep} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um CEP.</small>
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom05">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Estado
                            </Form.Label>
                            <Col sm={3}>
                                {/* <Estados
required
style={{ margin: "0px" }}
defaultValue={client.uf}
selectedEstadoOption={selectedEstadoOption}
setSelectedEstadoOption={setSelectedEstadoOption}
feedback="Error" /> */}

                                <Form.Control.Feedback type="invalid">
                                    {/* Deve ser preenchido um ESTADO. */}
                                </Form.Control.Feedback>
                            </Col>

                            <Form.Label column lg={FIRST_COLUMN}>
                                Municipio
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Select
                                    style={{ margin: "0px" }}
                                    className='form-control m-b'
                                    name='select-municipio'
                                    // value={municipio}
                                    defaultValue={client.municipio}
                                    feedback="Error">
                                    {listCity.map((item) => (
                                        <option key={item.id} value={item.sigla}>{item.nome}</option>
                                    ))}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid">
                                    {/* Deve ser preenchido um MUNÍCIPIO. */}
                                </Form.Control.Feedback>
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom06">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Endereço
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control
                                    required
                                    name="endereco"
                                    type="text"
                                    defaultValue={client.endereco} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um Endereço.</small>
                                </Form.Control.Feedback>
                            </Col>

                            <Form.Label column lg={FIRST_COLUMN}>
                                Número
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control
                                    required
                                    maxLength="5"
                                    name="numero"
                                    type="text"
                                    defaultValue={client.numero} />

                                <Form.Control.Feedback type="invalid">
                                    <small>Deve ser preenchido um Número.</small>
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom07">
                            <Form.Label column sm={FIRST_COLUMN}>
                                Complemento
                            </Form.Label>
                            <Col sm={SECOND_COLUMN}>
                                <Form.Control
                                    name="complemento"
                                    type="text"
                                    defaultValue={client.complemento} />
                            </Col>
                        </Form.Group>

                        <Modal.Footer>
                            <TButton variant="btn btn-block btn-outline" onClick={onHide}>
                                Voltar
                            </TButton>
                            <TButton type="submit" variant="primary">
                                Salvar
                            </TButton>
                        </Modal.Footer>

                    </Form>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default ClienteEdit;