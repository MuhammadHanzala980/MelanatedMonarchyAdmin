import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getActiveBidding, getPendingBidding } from "../../store/action";
import { Button, Card, CardHeader, TabPane, NavItem, NavLink, Nav, TabContent, Table, Container, Row, Col } from "reactstrap";
import classnames from "classnames";

class Bidding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      activeBidding: [],
      pendingBidding: [],
      activeTab: "1",
      activeBid: {
        backgroundColor: "#E7C68E",
      },
      pending: {
        backgroundColor: "",
      },
    };
  }

  componentDidMount() {
    const body = {
      offset: "0",
    };

    this.props.actions
      .getActiveBidding(body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            activeBidding: res.data.data,
          });
        }
        console.log(res);
      })
      .catch((err) => console.log(err));

    this.props.actions
      .getPendingBidding(body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            pendingBidding: res.data.data,
          });
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  getMore() {
    const body = {
      offset: "0",
    };

    this.props.actions
      .getActiveBidding(body)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            activeBidding: res,
          });
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeBidding, pendingBidding, activeTab, activeBid, pending } = this.state;
    return (
      <>
        <Container className="bg-black " fluid>
          <div className="header pb-8 pt-5 pt-lg-8 ">
            <Nav tabs>
              <NavItem>
                <NavLink
                  style={activeBid}
                  onClick={() => {
                    this.toggle("1");
                    this.setState({
                      activeBid: { backgroundColor: "#E7C68E" },
                      pending: { backgroundColor: "" },
                    });
                  }}
                >
                  Active Bidding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  //   className={{ active: active }}
                  style={pending}
                  onClick={() => {
                    this.setState({
                      activeBid: { backgroundColor: "" },
                      pending: { backgroundColor: "#E7C68E" },
                    });
                    this.toggle("2");
                  }}
                >
                  Pending Bidding
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row className="mt-5">
                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow">
                      <CardHeader className="bg-theme">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0 black">Active Bidding</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center bg-black" responsive>
                        <thead className="thead-dark">
                          <tr>
                            <th className="text-color" scope="col">
                              Bidding Title
                            </th>
                            <th className="text-color" scope="col">
                              Category
                            </th>
                            <th className="text-color" scope="col">
                              Post City{" "}
                            </th>
                            <th className="text-color" scope="col">
                              Price
                            </th>
                            <th className="text-color" scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-none">
                          {activeBidding.map((i, k) => {
                            return (
                              <tr className="text-color" key={k}>
                                <th scope="row">{i.title}</th>
                                <td>{i.categoryType}</td>
                                <td>{i.cityOrNeighborhood}</td>
                                <td>{i.price}</td>
                                <td>{i.status}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card>
                    <div className="bg-black text-center pt-4 text-color link " >
                      See More
                    </div>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="2">
                <Row className="mt-5">
                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow">
                      <CardHeader className="bg-theme">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0 black">Pending Bidding</h3>
                          </div>
                        </Row>
                      </CardHeader>
                      <Table className="align-items-center bg-black" responsive>
                        <thead className="thead-dark">
                          <tr>
                            <th className="text-color" scope="col">
                              Bidding Title
                            </th>
                            <th className="text-color" scope="col">
                              Category
                            </th>
                            <th className="text-color" scope="col">
                              Post City{" "}
                            </th>
                            <th className="text-color" scope="col">
                              Price
                            </th>
                            <th className="text-color" scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="border-none">
                          {pendingBidding.map((i, k) => {
                            console.log(i);
                            return (
                              <tr className="text-color" key={k}>
                                <th scope="row">{i.title}</th>
                                <td>{i.categoryType}</td>
                                <td>{i.cityOrNeighborhood}</td>
                                <td>{i.price}</td>
                                <td>{i.status}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
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
        getActiveBidding,
        getPendingBidding,
      },
      state
    ),
  };
};

export default connect(null, mapDispatchToProps)(Bidding);
// const mapDispatchToProps = {};
