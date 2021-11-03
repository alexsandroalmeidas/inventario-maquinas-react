import React, { useMemo } from 'react';
import Content from "../common/Content";
import PageHeader from "../common/PageHeader";
import TTable from "../components/table/TTable";
import makeData from '../components/table/makeData';

const serverData = makeData(10000);

const Grids = (props) => {
    const columns = useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
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