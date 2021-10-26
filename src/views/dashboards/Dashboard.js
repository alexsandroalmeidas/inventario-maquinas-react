import * as React from "react";
import { Link } from "react-router-dom";
import Content from "../common/Content";
import PageHeader from "../common/PageHeader";

function Dashboard(props) {
    return (
        <>
            <PageHeader title="Dashboard" />
            <Content>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1>
                                Página dashboard
                            </h1>
                            {/* <Button onClick={() => this.props.setaStatusDoBotao(true)}>Ok</Button> */}
                            <small>
                                {/* {props.teste.meuCep.logradouro} */}
                            </small>
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

export default Dashboard;