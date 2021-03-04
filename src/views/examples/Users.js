import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers } from "../../store/action";
import { Button, Card, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }

  componentDidMount() {
    const body = {
      offset: "0",
    };
    this.props.actions
      .getUsers(body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            Users: res.data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { Users } = this.state;
    return (
      <>
        <Container className="bg-black " fluid>
          <div className="header pb-8 pt-5 pt-lg-8 ">
            <Row className="mt-5">
              <Col className="mb-5 mb-xl-0" xl="12">
                <Card className="shadow">
                  <CardHeader className="bg-theme">
                    <Row className="align-items-center">
                      <div className="col">
                        <h3 className="mb-0 black">All User</h3>
                      </div>
                  
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center bg-black" responsive>
                    <thead className="thead-dark">
                      <tr>
                        <th className="text-color" scope="col">
                          Name
                        </th>
                        <th className="text-color" scope="col">
                          Email
                        </th>
                        <th className="text-color" scope="col">
                          Number
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      {Users.map((i, k) => {
                        console.log(i);
                        return (
                          <tr className="text-color" key={k}>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.number}</td>
                            <td>
                              <Button size="sm"  className='active black bold' >active</Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = (state) => {
  return {
    actions: bindActionCreators(
      {
        getUsers,
      },
      state
    ),
  };
};

export default connect(null, mapDispatchToProps)(Users);
// const mapDispatchToProps = {};
