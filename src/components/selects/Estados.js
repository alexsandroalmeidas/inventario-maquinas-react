import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const Estados = (props) => {

    const { selectedEstadoOption, setSelectedEstadoOption, defaultValue } = props;

    const [listUf, setListUf] = useState([]);



    useEffect(() => {
        const loadUfs = () => {
            let url = 'https://servicodados.ibge.gov.br/';
            url = url + 'api/v1/localidades/estados';
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.sort((a, b) => a.nome.localeCompare(b.nome));
                    setListUf([...data]);

                    data.map(estado => {
                        if (estado.sigla === defaultValue)
                            setSelectedEstadoOption(estado.id);

                        return estado;
                    });
                });
        };

        loadUfs();

    }, []);

    return (
        <>
            <Form.Select {...props}
                className='form-control m-b'
                name='select-estado'
                value={selectedEstadoOption}
                onChange={e => setSelectedEstadoOption(e.target.value)}>
                {listUf.map((item) =>
                    <option key={item.id} value={item.id}>{item.nome}</option>)}
            </Form.Select>
        </>
    );
};

export default Estados;