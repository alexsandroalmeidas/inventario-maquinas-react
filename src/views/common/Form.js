import React from 'react';
import Content from './Content';
import PageHeader from './PageHeader';
import Button from '../components/buttons/Button';

const Form = (props) => {
    return (
        <>
            <PageHeader beforeBreadcrumb="Componentes" title="Form" />
            <Content>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>All form elements
                                    <small>With custom checbox and radion elements.</small>
                                </h5>
                                <div ibox-tools></div>
                            </div>
                            <div className="ibox-content">
                                <form method="get" className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Normal</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Help text</label>

                                        <div className="col-sm-10"><input type="text" className="form-control" /> <span
                                            className="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Password</label>

                                        <div className="col-sm-10"><input type="password" className="form-control" name="password" /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Placeholder</label>

                                        <div className="col-sm-10"><input type="text" placeholder="placeholder" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-lg-2 control-label">Disabled</label>

                                        <div className="col-lg-10"><input type="text" disabled="" placeholder="Disabled input here..."
                                            className="form-control" /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-lg-2 control-label">Static control</label>

                                        <div className="col-lg-10"><p className="form-control-static">email @example.com</p></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Checkboxes and radios <br />
                                        <small className="text-navy">Normal Bootstrap elements</small>
                                    </label>

                                        <div className="col-sm-10">
                                            <div><label> <input type="checkbox" value="" /> Option one is this and that&mdash; be sure to include why it's great </label></div>
                                            <div><label> <input type="radio" checked="" value="option1" id="optionsRadios1" name="optionsRadios" /> Option one is this and that&mdash; be sure to
                                                include why it's great </label></div>
                                            <div><label> <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios" /> Option two can be something else and selecting it will
                                                deselect option one </label></div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Inline checkboxes</label>

                                        <div className="col-sm-10">
                                            <label className="checkbox-inline">
                                                <input type="checkbox" value="option1" id="inlineCheckbox1" /> a </label>
                                            <label className="checkbox-inline">
                                                <input type="checkbox" value="option2" id="inlineCheckbox2" /> b </label>
                                            <label className="checkbox-inline">
                                                <input type="checkbox" value="option3" id="inlineCheckbox3" /> c </label>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Checkboxes &amp; radios <br />
                                        <small className="text-navy">Custom elements</small>
                                    </label>

                                        <div className="col-sm-10">
                                            <div><label> <input icheck type="checkbox" ng-model="main.check2" />
                                                Option one </label></div>
                                            <div><label> <input icheck type="checkbox" ng-model="main.checkThree" />
                                                Option two checked </label></div>
                                            <div><label> <input icheck type="checkbox" ng-model="main.checkTwo"
                                                disabled /> Option three checked and disabled
                                            </label></div>
                                            <div><label> <input icheck type="checkbox" ng-model="main.check4"
                                                disabled /> Option four disabled </label></div>
                                            <div><label> <input icheck type="radio" name="radioTest"
                                                ng-model="main.checkFour" /> Option one </label></div>
                                            <div><label> <input icheck type="radio" name="radioTest"
                                                ng-model="main.check8" /> Option two checked </label>
                                            </div>
                                            <div><label> <input icheck type="radio" name="radioTestNext"
                                                ng-model="main.check8" disabled /> Option four disabled
                                            </label></div>
                                            <div><label> <input icheck type="radio" name="radioTestNext"
                                                ng-model="main.check9" disabled /> Option three checked
                                                and disabled</label></div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Inline checkboxes</label>

                                        <div className="col-sm-10">
                                            <label className="checkbox-inline"> <input icheck type="checkbox" ng-model="main.unCheck" /> a
                                            </label>
                                            <label className="checkbox-inline"> <input icheck type="checkbox" ng-model="main.unCheck" /> b
                                            </label>
                                            <label className="checkbox-inline"> <input icheck type="checkbox" ng-model="main.unCheck" /> c
                                            </label></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Select</label>

                                        <div className="col-sm-10"><select className="form-control m-b" name="account">
                                            <option>option 1</option>
                                            <option>option 2</option>
                                            <option>option 3</option>
                                            <option>option 4</option>
                                        </select>

                                            <div className="col-lg-4 m-l-n"><select className="form-control" multiple="">
                                                <option>option 1</option>
                                                <option>option 2</option>
                                                <option>option 3</option>
                                                <option>option 4</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group has-success"><label className="col-sm-2 control-label">Input with
                                        success</label>

                                        <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group has-warning"><label className="col-sm-2 control-label">Input with
                                        warning</label>

                                        <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group has-error"><label className="col-sm-2 control-label">Input with error</label>

                                        <div className="col-sm-10"><input type="text" className="form-control" /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Control sizing</label>

                                        <div className="col-sm-10">
                                            <input type="text" placeholder=".input-lg" className="form-control input-lg m-b" />
                                            <input type="text" placeholder="Default input" className="form-control m-b" />
                                            <input type="text" placeholder=".input-sm" className="form-control input-sm" />
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Column sizing</label>

                                        <div className="col-sm-10">
                                            <div className="row">
                                                <div className="col-md-2"><input type="text" placeholder=".col-md-2"
                                                    className="form-control" /></div>
                                                <div className="col-md-3"><input type="text" placeholder=".col-md-3"
                                                    className="form-control" /></div>
                                                <div className="col-md-4"><input type="text" placeholder=".col-md-4"
                                                    className="form-control" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Input groups</label>

                                        <div className="col-sm-10">
                                            <div className="input-group m-b"><span className="input-group-addon">@</span> <input type="text"
                                                placeholder="Username"
                                                className="form-control" />
                                            </div>
                                            <div className="input-group m-b"><input type="text" className="form-control" /> <span
                                                className="input-group-addon">.00</span></div>
                                            <div className="input-group m-b"><span className="input-group-addon">$</span> <input type="text"
                                                className="form-control" />
                                                <span className="input-group-addon">.00</span></div>
                                            <div className="input-group m-b"><span className="input-group-addon"> <input
                                                type="checkbox" /> </span> <input type="text" className="form-control" /></div>
                                            <div className="input-group"><span className="input-group-addon"> <input type="radio" /> </span>
                                                <input type="text" className="form-control" /></div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Button addons</label>

                                        <div className="col-sm-10">
                                            <div className="input-group m-b"><span className="input-group-btn">
                                                <Button type="button" className="btn btn-primary">Go!</Button> </span> <input
                                                    type="text" className="form-control" />
                                            </div>
                                            <div className="input-group"><input type="text" className="form-control" /> <span
                                                className="input-group-btn"> <Button type="button" className="btn btn-primary">Go!
                                                </Button> </span></div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">With dropdowns</label>

                                        <div className="col-sm-10">
                                            <div className="input-group m-b">
                                                <div className="input-group-btn" dropdown>
                                                    <Button className="btn btn-white dropdown-toggle" dropdown-toggle type="button">
                                                        Action <span className="caret"></span></Button>
                                                    <ul className="dropdown-menu">
                                                        {/* <li><a href="">Action</a></li>
                                                        <li><a href="">Another action</a></li>
                                                        <li><a href="">Something else here</a></li> */}
                                                        <li className="divider"></li>
                                                        {/* <li><a href="">Separated link</a></li> */}
                                                    </ul>
                                                </div>
                                                <input type="text" className="form-control" /></div>
                                            <div className="input-group"><input type="text" className="form-control" />

                                                <div className="input-group-btn" dropdown>
                                                    <Button className="btn btn-white dropdown-toggle" dropdown-toggle type="button">
                                                        Action <span className="caret"></span></Button>
                                                    <ul className="dropdown-menu pull-right">
                                                        {/* <li><a href="">Action</a></li>
                                                        <li><a href="">Another action</a></li>
                                                        <li><a href="">Something else here</a></li> */}
                                                        <li className="divider"></li>
                                                        {/* <li><a href="">Separated link</a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group"><label className="col-sm-2 control-label">Segmented</label>

                                        <div className="col-sm-10">
                                            <div className="input-group m-b">
                                                <div className="input-group-btn" dropdown>
                                                    <Button tabindex="-1" className="btn btn-white" type="button">Action</Button>
                                                    <Button className="btn btn-white dropdown-toggle" dropdown-toggle type="button">
                                                        <span className="caret"></span></Button>
                                                    <ul className="dropdown-menu">
                                                        {/* <li><a href="">Action</a></li>
                                                        <li><a href="">Another action</a></li>
                                                        <li><a href="">Something else here</a></li> */}
                                                        <li className="divider"></li>
                                                        {/* <li><a href="">Separated link</a></li> */}
                                                    </ul>
                                                </div>
                                                <input type="text" className="form-control" /></div>
                                            <div className="input-group"><input type="text" className="form-control" />


                                                <div className="input-group-btn" dropdown>
                                                    <Button className="btn btn-white" type="button">Action</Button>
                                                    <Button className="btn btn-white dropdown-toggle" dropdown-toggle type="button">
                                                        <span className="caret"></span></Button>
                                                    <ul className="dropdown-menu pull-right">
                                                        {/* <li><a href="">Action</a></li>
                                                        <li><a href="">Another action</a></li>
                                                        <li><a href="">Something else here</a></li> */}
                                                        <li className="divider"></li>
                                                        {/* <li><a href="">Separated link</a></li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>
                                    <div className="form-group">
                                        <div className="col-sm-4 col-sm-offset-2">
                                            <Button className="btn btn-white" type="submit">Cancel</Button>
                                            <Button className="btn btn-primary" type="submit">Save changes</Button>
                                        </div>
                                    </div>

                                </form>
                            </div>
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

export default Form;