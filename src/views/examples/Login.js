import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { signInUser } from "../../store/action";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Row, Col, Label } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "admin@gmail.com",
      password: "admin",
      messageErr: "",
    };
  }

  value(e) {
    this.setState({
      [e.target.name]: e.target.value,
      messageErr: "",
    });
  }

  signin(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (email.length < 2) {
      this.setState({
        messageErr: "Please Enter valid Email address.",
      });
    } else if (password.length < 4) {
      this.setState({
        messageErr: "Enter your password.",
      });
    } else {
      const userdata = { password, email };
      this.props.actions
        .signInUser(userdata)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.setItem("__admin_token__", JSON.stringify(res.data.token));
            localStorage.setItem("__admin__", JSON.stringify(res.data.user));
            this.props.history.push("/admin/index");
            window.location.reload();
          } else {
            this.setState({
              messageErr: "Password is incoorect. kindly check and enter again.",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            messageErr: "Password is incoorect. kindly check and enter again.",
          });
        });
    }
  }
  render() {
    const { email, password, messageErr } = this.state;

    return (
      <>
        <Col lg="6" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-0">
              <div className="text-muted text-center mt-2 mb-0">
                <h1>Log In </h1>
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <Label className="label ml-1">Email</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" name="email" value={email} type="text" onChange={this.value.bind(this)} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label className="label ml-1">Password</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" name="password" value={password} onChange={this.value.bind(this)} />
                  </InputGroup>
                </FormGroup>

                <FormGroup>{messageErr && <Label className="label ml-1 text-danger ">{messageErr}</Label>}</FormGroup>
                <div className="text-center">
                  <Button className="my-2 bg-theme  " type="button" onClick={this.signin.bind(this)}>
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
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
        signInUser,
      },
      dispatchEvent
    ),
  };
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
