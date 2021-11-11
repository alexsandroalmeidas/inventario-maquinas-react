import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Modal, InputGroup, FormControl, Button } from 'react-bootstrap';
import TButton from '../../components/buttons/TButton';
import Estados from '../../components/selects/Estados';

const FIRST_COLUMN = 2;
const SECOND_COLUMN = 10;


const ClienteEdit = (props) => {

    const { client, onHide, show, ...rest } = props;

    const [validated, setValidated] = useState(false);
    const [city, setCity] = useState(client.municipio);
    const [selectedEstadoOption, setSelectedEstadoOption] = useState();
    const [listCity, setListCity] = useState([]);


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return
        }

        setValidated(true);
        onHide();
    };

    const loadCities = (id) => {
        let url = 'https://servicodados.ibge.gov.br/api/v1/';
        url = url + `localidades/estados/${id}/municipios`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => a.nome.localeCompare(b.nome));
                setListCity([...data]);
                if (client.municipio)
                    setCity(client.municipio);
            });
    };

    useEffect(() => {
        if (selectedEstadoOption) {
            loadCities(selectedEstadoOption);
        }
    }, [selectedEstadoOption]);

    return (
        <>
            <Modal {...props}
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

                        {/* <Row>
                            <Form.Label column lg={2}>
                                Normal Text
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Normal text" />
                            </Col>

                            <Form.Label column lg={2}>
                                Normal Text
                            </Form.Label>
                            <Col>
                                <Form.Control type="text" placeholder="Normal text" />
                            </Col>
                        </Row> */}

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
                                    type="text"
                                    className="form-control"
                                    defaultValue={client.nome} />

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um nome.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom02">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Documento
                            </Form.Label>
                            <Col sm={3}>
                                <Form.Control
                                    required
                                    type="text"
                                    className="form-control"
                                    defaultValue={client.documento} />

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um documento.
                                </Form.Control.Feedback>
                            </Col>

                            <Form.Label column lg={FIRST_COLUMN}>
                                Telefone
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Control
                                    required
                                    type="text"
                                    className="form-control"
                                    defaultValue={client.telefone} />

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um telefone.
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
                                    className="form-control"
                                    defaultValue={client.email} />

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um e-mail.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom04">
                            <Form.Label column lg={FIRST_COLUMN}>
                                CEP
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control className="form-control" defaultValue={client.cep} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom05">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Estado
                            </Form.Label>
                            <Col sm={3}>
                                <Estados
                                    required
                                    style={{ margin: "0px" }}
                                    defaultValue={client.uf}
                                    selectedEstadoOption={selectedEstadoOption}
                                    setSelectedEstadoOption={setSelectedEstadoOption} />

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um estado.
                                </Form.Control.Feedback>
                            </Col>

                            <Form.Label column lg={FIRST_COLUMN}>
                                Municipio
                            </Form.Label>
                            <Col sm={5}>
                                {/* <Form.Control
                                    required
                                    className="form-control" /> */}

                                <Form.Select
                                    style={{ margin: "0px" }}
                                    className='form-control m-b'
                                    name='select-municipio'
                                    value={city}
                                    defaultValue={client.municipio}
                                    onChange={e => setCity(e.target.value)}>
                                    {listCity.map((a, b) => (
                                        <option value={a.sigla}>{a.nome}</option>
                                    ))}
                                </Form.Select>

                                <Form.Control.Feedback type="invalid">
                                    Deve ser preenchido um munícipio.
                                </Form.Control.Feedback>
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom06">
                            <Form.Label column lg={FIRST_COLUMN}>
                                Endereço
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control className="form-control" defaultValue={client.endereco} />
                            </Col>

                            <Form.Label column LG={FIRST_COLUMN}>
                                Número
                            </Form.Label>
                            <Col sm={2}>
                                <Form.Control className="form-control" defaultValue={client.numero} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-1" controlId="validationCustom07">
                            <Form.Label column sm={FIRST_COLUMN}>
                                Complemento
                            </Form.Label>
                            <Col sm={SECOND_COLUMN}>
                                <Form.Control className="form-control" defaultValue={client.complemento} />
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