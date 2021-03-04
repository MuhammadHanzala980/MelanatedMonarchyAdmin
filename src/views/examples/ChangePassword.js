import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Label,
} from "reactstrap";


import { changePassword } from "../../store/action";

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPwd: "",
            password: "",
            confirmpwd: "",
            messageErr: "",
        };
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            this.setState({ validatedEmail: true });
        }
    }
    value(e) {
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
            messageErr: "",
        });
        if (e.target.name === "email") {
            this.validateEmail(e.target.value);
        }
    }
    ChangePassword() {
        const { password, confirmpwd, newPwd } = this.state;
        if (password.length < 8) {
            console.log("9876543");
            this.setState({
                messageErr: "Your password must be at least 8 characters long !",
            });
        } else if (newPwd.length < 8) {
            console.log("9876543");
            this.setState({
                messageErr: "Your New password must be at least 8 characters long",
            });
        } else if (confirmpwd !== newPwd) {
            console.log("9876543");
            this.setState({
                messageErr: "Password does not match",
            });
        } else {
            const userdata = {
                oldpassword: password,
                newpassword: confirmpwd,
            };
            this.setState({
                loading: true,
            });

            this.props.actions
                .changePassword(userdata)
                .then((res) => {
                    console.log(res);
                    if (res.data.message === "User Registered") {
                        this.setState({
                            open: true,
                        });
                    } else {
                        this.setState({
                            loading: false,
                            messageErr: res.data.message,
                        });
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    render() {
        const { password, newPwd, confirmpwd, messageErr } = this.state;

        return (
            <>
                <Col lg="6" md="7">
                    <Card className="bg-secondary shadow border-0">
                        <CardHeader className="bg-transparent pb-0">
                            <div className="text-muted text-center mt-2 mb-0">
                                <h1>change Password </h1>
                            </div>
                        </CardHeader>
                        <CardBody className="px-lg-5 py-lg-5">
                            <Form role="form">
                                <FormGroup>
                                    <Label className='label ml-1' >Current Password</Label>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Current Password"
                                            type="password"
                                            autoComplete="new-password"
                                            name='password'
                                            value={password} onChange={this.value.bind(this)}
                                        />
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup>
                                    <Label className='label ml-1' >New Password</Label>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="New Password"
                                            type="password"
                                            autoComplete="password"
                                            name='newPwd'
                                            value={newPwd} onChange={this.value.bind(this)}
                                        />
                                    </InputGroup>
                                </FormGroup>

                                <FormGroup>
                                    <Label className='label ml-1' >Confirm Password</Label>
                                    <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Confirm Password"
                                            type="password"
                                            autoComplete="password"
                                            name='confirmpwd'
                                            value={confirmpwd} onChange={this.value.bind(this)}
                                        />
                                    </InputGroup>
                                </FormGroup>


                                <FormGroup>
                                    {messageErr && <Label className='label ml-1 text-danger ' >{messageErr}</Label>}

                                </FormGroup>
                                <div className="text-center">
                                    <Button className="my-2 bg-theme  " type="button" onClick={this.ChangePassword.bind(this)} >
                                        Change Password
                  </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col  xs="6">
                            <a
                                className="text-light"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <small>Create new account</small>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </>
        );
    }
}



const mapDispatchToProps = (dispatchEvent) => {
    return {
        actions: bindActionCreators(
            {
                changePassword,
            },
            dispatchEvent
        ),
    };
};
const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);