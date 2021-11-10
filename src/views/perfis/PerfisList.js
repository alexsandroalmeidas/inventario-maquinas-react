import React, { Fragment, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Content from '../../components/common/Content';
import PageHeader from '../../components/common/PageHeader';
import TTable from '../../components/table/TTable';
import TButton from '../../components/buttons/TButton';
import PerfilEdit from './PerfilEdit';

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

const PerfisList = () => {

    const [perfilEdit, setPerfilEdit] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditClick = (row) => {
        handleShow();
        setPerfilEdit(row.original);
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

                                <TTable
                                    columns={columns}
                                    serverData={serverData}
                                />

                                <PerfilEdit perfilEdit={perfilEdit} handleClose={handleClose} show={show} />

                            </div>
                        </div>
                    </div>
                </Content>

            </Fragment >
        </>

    )
}

export default PerfisList;