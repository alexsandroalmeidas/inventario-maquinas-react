import React, { useMemo } from 'react';
import Content from '../common/Content';
import PageHeader from '../common/PageHeader';
import TTable from '../components/table/TTable';
import makeData from '../components/table/makeData';
import Button from '../components/buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const serverData = makeData(1000);

const Grids = (props) => {

    const handleButtonClick = (row) => {
        // debugger;
    };

    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
                filter: 'fuzzyText',
            },
            {
                Header: 'Age',
                accessor: 'age',
                width: 50,
                align: 'right',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
                width: 50,
                align: 'right',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
            {
                Header: 'Edit',
                id: 'click-me-button',
                Cell: (props) => {
                    const rowIdx = props.row.id;
                    return (
                        <div>
                            <Button className="btn btn-primary btn-sm" onClick={() => handleButtonClick(props.row)}>
                                Inativar
                            </Button>

                            <Button className="btn btn-default btn-sm" onClick={() => handleButtonClick(props.row)}>
                                <FontAwesomeIcon icon={faPencilAlt} />&nbsp;
                                Editar
                            </Button>


                        </div >
                    );
                },
            }
        ],
        []
    );

    return (
        <>
            <PageHeader beforeBreadcrumb="Componentes" title="Grids" />
            <Content>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>GRID Completa</h5>

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
            {/* <Modal
                title="Basic Modal"
                visible={this.props.teste.meuBotao}
                onOk={() => this.props.setaStatusDoBotao(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal> */}
        </>

    )
}

export default Grids;