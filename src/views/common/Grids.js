import React, { useMemo, useState, useCallback, useRef } from 'react';
import Content from "../common/Content";
import PageHeader from "../common/PageHeader";
import TTable from "../components/table/TTable";
import makeData from '../components/table/makeData';
import Pagination from '../components/table/Pagination';
import data from './MOCK_DATA.json';

const serverData = makeData(10000);
let PageSize = 10;

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
                                <h5>Listagem de Usuários</h5>

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

// const Grids = () => {

//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>FIRST NAME</th>
//                         <th>LAST NAME</th>
//                         <th>EMAIL</th>
//                         <th>PHONE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentTableData.map(item => {
//                         return (
//                             <tr>
//                                 <td key={item.id}>{item.id}</td>
//                                 <td key={item.first_name}>{item.first_name}</td>
//                                 <td key={item.last_name}>{item.last_name}</td>
//                                 <td key={item.email}>{item.email}</td>
//                                 <td key={item.phone}>{item.phone}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody >
//             </table >
//             <Pagination
//                 className="pagination-bar"
//                 currentPage={currentPage}
//                 totalCount={data.length}
//                 pageSize={PageSize}
//                 onPageChange={page => setCurrentPage(page)}
//             />
//         </>
//     );
// }

export default Grids;