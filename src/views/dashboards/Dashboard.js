import * as React from "react";
import Content from "../common/Content";
import PageHeader from "../common/PageHeader";
import TButton from '../components/buttons/TButton';

function Dashboard(props) {
    return (
        <>
            <PageHeader title="Dashboard" />
            <Content>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h1>
                                Página dashboard
                            </h1>
                            {/* <Button onClick={() => this.props.setaStatusDoBotao(true)}>Ok</Button> */}
                            <div className="wrapper wrapper-content">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <span className="label label-success pull-right">Monthly</span>
                                                <h5>Income</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <h1 className="no-margins">40 886,200</h1>

                                                <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                                                <small>Total income</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <span className="label label-info pull-right">Annual</span>
                                                <h5>Orders</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <h1 className="no-margins">275,800</h1>

                                                <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                                <small>New orders</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <span className="label label-primary pull-right">Today</span>
                                                <h5>Vistits</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <h1 className="no-margins">106,120</h1>

                                                <div className="stat-percent font-bold text-navy">44% <i className="fa fa-level-up"></i></div>
                                                <small>New visits</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <span className="label label-danger pull-right">Low value</span>
                                                <h5>User activity</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <h1 className="no-margins">80,600</h1>

                                                <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                                                <small>In first month</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <h5>Orders</h5>

                                                <div className="pull-right">
                                                    <div className="btn-group">
                                                        <TButton type="button" className="btn btn-xs btn-white active">Today</TButton>
                                                        <TButton type="button" className="btn btn-xs btn-white">Monthly</TButton>
                                                        <TButton type="button" className="btn btn-xs btn-white">Annual</TButton>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ibox-content">
                                                <div className="row">
                                                    <div className="col-lg-9">
                                                        {/* <div className="flot-chart" ng-controller="dashboardFlotTwo as chart">
                                                            <div flot className="flot-chart-content" dataset="chart.flotData" options="chart.flotOptions"></div>
                                                        </div> */}
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <ul className="stat-list">
                                                            <li>
                                                                <h2 className="no-margins">2,346</h2>
                                                                <small>Total orders in period</small>
                                                                <div className="stat-percent">48% <i className="fa fa-level-up text-navy"></i></div>
                                                                <div className="progress progress-mini">
                                                                    <div style={{ width: '48%' }} className="progress-bar"></div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h2 className="no-margins ">4,422</h2>
                                                                <small>Orders in last month</small>
                                                                <div className="stat-percent">60% <i className="fa fa-level-down text-navy"></i></div>
                                                                <div className="progress progress-mini">
                                                                    <div style={{ width: '60%' }} className="progress-bar"></div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <h2 className="no-margins ">9,180</h2>
                                                                <small>Monthly income from orders</small>
                                                                <div className="stat-percent">22% <i className="fa fa-bolt text-navy"></i></div>
                                                                <div className="progress progress-mini">
                                                                    <div style={{ width: '22%' }} className="progress-bar"></div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <h5>Messages</h5>
                                                {/* <div ibox-tools></div> */}
                                            </div>
                                            <div className="ibox-content ibox-heading">
                                                <h3><i className="fa fa-envelope-o"></i> New messages</h3>
                                                <small><i className="fa fa-tim"></i> You have 22 new messages and 16 waiting in draft folder.</small>
                                            </div>
                                            <div className="ibox-content">
                                                <div className="feed-activity-list">

                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right text-navy">1m ago</small>
                                                            <strong>Monica Smith</strong>

                                                            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum</div>
                                                            <small className="text-muted">Today 5: 60 pm - 12.06.2014</small>
                                                        </div>
                                                    </div>

                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">2m ago</small>
                                                            <strong>Jogn Angel</strong>

                                                            <div>There are many variations of passages of Lorem Ipsum available</div>
                                                            <small className="text-muted">Today 2: 23 pm - 11.06.2014</small>
                                                        </div>
                                                    </div>

                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">5m ago</small>
                                                            <strong>Jesica Ocean</strong>

                                                            <div>Contrary to popular belief, Lorem Ipsum</div>
                                                            <small className="text-muted">Today 1: 00 pm - 08.06.2014</small>
                                                        </div>
                                                    </div>

                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">5m ago</small>
                                                            <strong>Monica Jackson</strong>

                                                            <div>The generated Lorem Ipsum is therefore</div>
                                                            <small className="text-muted">Yesterday 8: 48 pm - 10.06.2014</small>
                                                        </div>
                                                    </div>


                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">5m ago</small>
                                                            <strong>Anna Legend</strong>

                                                            <div>All the Lorem Ipsum generators on the Internet tend to repeat</div>
                                                            <small className="text-muted">Yesterday 8: 48 pm - 10.06.2014</small>
                                                        </div>
                                                    </div>
                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">5m ago</small>
                                                            <strong>Damian Nowak</strong>

                                                            <div>The standard chunk of Lorem Ipsum used</div>
                                                            <small className="text-muted">Yesterday 8: 48 pm - 10.06.2014</small>
                                                        </div>
                                                    </div>
                                                    <div className="feed-element">
                                                        <div>
                                                            <small className="pull-right">5m ago</small>
                                                            <strong>Gary Smith</strong>

                                                            <div>200 Latin words, combined with a handful</div>
                                                            <small className="text-muted">Yesterday 8: 48 pm - 10.06.2014</small>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">

                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="ibox float-e-margins">
                                                    <div className="ibox-title">
                                                        <h5>User project list</h5>
                                                        {/* <div ibox-tools></div> */}
                                                    </div>
                                                    <div className="ibox-content">
                                                        <table className="table table-hover no-margins">
                                                            <thead>
                                                                <tr>
                                                                    <th>Status</th>
                                                                    <th>Date</th>
                                                                    <th>User</th>
                                                                    <th>Value</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <small>Pending...</small>
                                                                    </td>
                                                                    <td><i className="fa fa-clock-o"></i> 11: 20pm</td>
                                                                    <td>Samantha</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 24%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span className="label label-warning">Canceled</span></td>
                                                                    <td><i className="fa fa-clock-o"></i> 10: 40am</td>
                                                                    <td>Monica</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 66%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <small>Pending...</small>
                                                                    </td>
                                                                    <td><i className="fa fa-clock-o"></i> 01: 30pm</td>
                                                                    <td>John</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 54%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <small>Pending...</small>
                                                                    </td>
                                                                    <td><i className="fa fa-clock-o"></i> 02: 20pm</td>
                                                                    <td>Agnes</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 12%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td><span className="label label-primary">Completed</span></td>
                                                                    <td><i className="fa fa-clock-o"></i> 04: 10am</td>
                                                                    <td>Amelia</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 66%</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <small>Pending...</small>
                                                                    </td>
                                                                    <td><i className="fa fa-clock-o"></i> 12: 08am</td>
                                                                    <td>Damian</td>
                                                                    <td className="text-navy"><i className="fa fa-level-up"></i> 23%</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="ibox">
                                                    <div className="ibox-title">
                                                        <h5>Small todo list</h5>
                                                        {/* <div ibox-tools></div> */}
                                                    </div>
                                                    <div className="ibox-content">
                                                        <ul className="todo-list m-t small-list">
                                                            {/* <li>
                                                                <checkbox ng-model="main.checkOne"></checkbox>
                                                                <span className="m-l-xs">Buy a milk</span>
                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="check1"></checkbox>
                                                                <span className="m-l-xs">Go to shop and find some products.</span>

                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="check2"></checkbox>
                                                                <span className="m-l-xs">Send documents to Mike</span>
                                                                <small className="label label-primary"><i className="fa fa-clock-o"></i> 1 mins</small>
                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="main.checkTwo"></checkbox>
                                                                <span className="m-l-xs">Go to the doctor dr Smith</span>
                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="check4"></checkbox>
                                                                <span className="m-l-xs">Plan vacation</span>
                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="check5"></checkbox>
                                                                <span className="m-l-xs">Create new stuff</span>
                                                            </li>
                                                            <li>
                                                                <checkbox ng-model="check6"></checkbox>
                                                                <span className="m-l-xs">Call to Anna for dinner</span>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="ibox float-e-margins">
                                                    <div className="ibox-title">
                                                        <h5>Transactions worldwide</h5>
                                                        {/* <div ibox-tools></div> */}
                                                    </div>
                                                    <div className="ibox-content">

                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <table className="table table-hover margin bottom">
                                                                    <thead>
                                                                        <tr>
                                                                            <th style={{ width: '1%' }} className="text-center">No.</th>
                                                                            <th>Transaction</th>
                                                                            <th className="text-center">Date</th>
                                                                            <th className="text-center">Amount</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-center">1</td>
                                                                            <td> Security doors
                                                                            </td>
                                                                            <td className="text-center small">16 Jun 2014</td>
                                                                            <td className="text-center"><span className="label label-primary">$483.00</span></td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">2</td>
                                                                            <td> Wardrobes
                                                                            </td>
                                                                            <td className="text-center small">10 Jun 2014</td>
                                                                            <td className="text-center"><span className="label label-primary">$327.00</span></td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">3</td>
                                                                            <td> Set of tools
                                                                            </td>
                                                                            <td className="text-center small">12 Jun 2014</td>
                                                                            <td className="text-center"><span className="label label-warning">$125.00</span></td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">4</td>
                                                                            <td> Panoramic pictures</td>
                                                                            <td className="text-center small">22 Jun 2013</td>
                                                                            <td className="text-center"><span className="label label-primary">$344.00</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">5</td>
                                                                            <td>Phones</td>
                                                                            <td className="text-center small">24 Jun 2013</td>
                                                                            <td className="text-center"><span className="label label-primary">$235.00</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-center">6</td>
                                                                            <td>Monitors</td>
                                                                            <td className="text-center small">26 Jun 2013</td>
                                                                            <td className="text-center"><span className="label label-primary">$100.00</span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="col-lg-6" ng-controller="dashboardMap as map">
                                                                {/* <div vector-map style="height: 300px;" my-map-data="map.data"></div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div className="small-chat-box ng-small-chat fadeInRight animated" ng-show="openChat">

                                <div className="heading" draggable="true">
                                    <small className="chat-date pull-right">
                                        02.19.2015
                                    </small>
                                    Small chat
                                </div>

                                <div className="content">

                                    <div className="left">
                                        <div className="author-name">
                                            Monica Jackson <small className="chat-date">
                                                10:02 am
                                            </small>
                                        </div>
                                        <div className="chat-message active">
                                            Lorem Ipsum is simply dummy text input.
                                        </div>

                                    </div>
                                    <div className="right">
                                        <div className="author-name">
                                            Mick Smith
                                            <small className="chat-date">
                                                11:24 am
                                            </small>
                                        </div>
                                        <div className="chat-message">
                                            Lorem Ipsum is simpl.
                                        </div>
                                    </div>
                                    <div className="left">
                                        <div className="author-name">
                                            Alice Novak
                                            <small className="chat-date">
                                                08:45 pm
                                            </small>
                                        </div>
                                        <div className="chat-message active">
                                            Check this stock char.
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="author-name">
                                            Anna Lamson
                                            <small className="chat-date">
                                                11:24 am
                                            </small>
                                        </div>
                                        <div className="chat-message">
                                            The standard chunk of Lorem Ipsum
                                        </div>
                                    </div>
                                    <div className="left">
                                        <div className="author-name">
                                            Mick Lane
                                            <small className="chat-date">
                                                08:45 pm
                                            </small>
                                        </div>
                                        <div className="chat-message active">
                                            I belive that. Lorem Ipsum is simply dummy text.
                                        </div>
                                    </div>


                                </div>
                                <div className="form-chat">
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-btn">
                                            <TButton
                                                className="btn btn-primary" type="button">Send
                                            </TButton> </span></div>
                                </div>

                            </div>
                            <div id="small-chat" ng-click="openChat = !openChat">

                                <span className="badge badge-warning pull-right">5</span>
                                {/* <a className="open-small-chat">
                                    <i className="fa fa-comments"></i>

                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Content >
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