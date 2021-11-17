import React, { useEffect, useState, useMemo } from 'react';
import { Form, Row, Col, Modal, InputGroup, Button } from 'react-bootstrap';
import { useForm, reset } from 'react-hook-form';
import TButton from '../../components/buttons/TButton';
import { TInput, TForm } from '../../components/components';
import Estados from '../../components/selects/Estados';
// import useForm from '../../utils/useForm';
import validate from './ClienteEditValidationRules';
import InputMask from "react-input-mask";

const FIRST_COLUMN = 2;
const SECOND_COLUMN = 10;

const ClienteEdit = ({ client, onHide, show, carregarCliente, ...rest }) => {

    // const [carregarCliente, setCarregarCliente] = useState(true);
    const [validated, setValidated] = useState(false);


    // const {
    //     values,
    //     errors,
    //     handleChange,
    //     handleSubmit,
    // } = useForm(onHide, validate);

    const [municipio, setMunicipio] = useState("");
    const [selectedEstadoOption, setSelectedEstadoOption] = useState();
    const [listCity, setListCity] = useState([]);




    // const handleSubmitEdit = (event) => {
    //     const form = event.currentTarget;
    //     event.preventDefault();
    //     debugger;

    //     // if (form.checkValidity() === true) {
    //     //     event.preventDefault();
    //     //     event.stopPropagation();
    //     //     setValidated(true);
    //     // }

    //     // if (formValid(formEditState)) {
    //     //     console.log(formEditState)
    //     // } else {
    //     //     console.log("Form is invalid!");
    //     // }
    // };

    // const formValChange = e => {
    //     e.preventDefault();
    //     debugger;
    //     const { name, value } = e.target;
    //     let isError = { ...formEditState.isError };

    //     switch (name) {
    //         case "nome":
    //             isError.nome = value.trim().length < 1 ? "Nome required" : '';
    //             break;
    //         // case "email":
    //         //     isError.email = regExp.test(value)
    //         //         ? ""
    //         //         : "Email address is invalid";
    //         //     break;
    //         // case "password":
    //         //     isError.password =
    //         //         value.length < 6 ? "Atleast 6 characaters required" : "";
    //         //     break;
    //         default:
    //             break;
    //     }

    //     setFormEditState({
    //         isError,
    //         [name]: value
    //     })
    // };

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // };
    // console.log(errors);

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

    useEffect(() => {
        if (selectedEstadoOption) {
            loadCities(selectedEstadoOption);
        }
    }, [selectedEstadoOption]);

    useEffect(() => {
        if (validated) {
            // onHide();
        }
    }, [validated]);

    // useEffect(() => {
    //     debugger;
    //     if (client) {
    //         //   const tarefasDb = localStorage['tarefas'];
    //         //   const tarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
    //         //   const tarefa = tarefas.filter(
    //         //     t => t.id === parseInt(props.id)
    //         //   )[0];

    //         values.nome = client.nome;
    //         // setCarregarCliente(false);
    //     }
    // }, [client]);
    // // const { isError, nome } = formEditState;

    // useEffect(() => {
    //     if (client) {
    //         setValue([
    //             { name: userData.name }, 
    //             { phone: userData.phone }
    //         ]);
    //     }
    // }, [client]);
    // const {
    //     register,
    //     reset,
    //     formState: { errors },
    //     handleSubmit
    // } = useForm({
    //     defaultValues: client
    // });

    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // };


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
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
                                    name="telefone"
                                    mask="99999-999"
                                    defaultValue={client.telefone} />

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