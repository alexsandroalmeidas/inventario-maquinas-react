import React, { useState, useEffect, Fragment } from 'react';
import { Form } from 'react-bootstrap';

const options = [
    { id: 27, value: 'AL', label: 'Alagoas', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 16, value: 'AP', label: 'Amapá', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
    { id: 13, value: 'AM', label: 'Amazonas', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
    { id: 29, value: 'BA', label: 'Bahia', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 23, value: 'CE', label: 'Ceará', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 53, value: 'DF', label: 'Distrito Federal', regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' } },
    { id: 32, value: 'ES', label: 'Espírito Santo', regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' } },
    { id: 52, value: 'GO', label: 'Goiás', regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' } },
    { id: 21, value: 'MA', label: 'Maranhão', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 50, value: 'MS', label: 'Mato Grosso do Sul', regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' } },
    { id: 51, value: 'MT', label: 'Mato Grosso', regiao: { id: 5, sigla: 'CO', nome: 'Centro-Oeste' } },
    { id: 31, value: 'MG', label: 'Minas Gerais', regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' } },
    { id: 15, value: 'PA', label: 'Pará', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
    { id: 25, value: 'PB', label: 'Paraíba', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 41, value: 'PR', label: 'Paraná', regiao: { id: 4, sigla: 'S', nome: 'Sul' } },
    { id: 26, value: 'PE', label: 'Pernambuco', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 22, value: 'PI', label: 'Piauí', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 33, value: 'RJ', label: 'Rio de Janeiro', regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' } },
    { id: 24, value: 'RN', label: 'Rio Grande do Norte', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 43, value: 'RS', label: 'Rio Grande do Sul', regiao: { id: 4, sigla: 'S', nome: 'Sul' } },
    { id: 11, value: 'RO', label: 'Rondônia', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
    { id: 14, value: 'RR', label: 'Roraima', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
    { id: 42, value: 'SC', label: 'Santa Catarina', regiao: { id: 4, sigla: 'S', nome: 'Sul' } },
    { id: 35, value: 'SP', label: 'São Paulo', regiao: { id: 3, sigla: 'SE', nome: 'Sudeste' } },
    { id: 28, value: 'SE', label: 'Sergipe', regiao: { id: 2, sigla: 'NE', nome: 'Nordeste' } },
    { id: 17, value: 'TO', label: 'Tocantins', regiao: { id: 1, sigla: 'N', nome: 'Norte' } },
];


const Estados = (props) => {

    const { selectedEstadoOption, setSelectedEstadoOption, defaultValue } = props;

    const [listUf, setListUf] = useState([]);

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
                });
            });
    };

    useEffect(() => {
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