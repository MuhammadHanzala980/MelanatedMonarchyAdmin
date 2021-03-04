import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getListing } from "../../store/action";
import { Button, Card, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col } from "reactstrap";
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    const body = {
      offset: "0",
    };
    this.props.actions
      .getListing(body)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            listings: res.data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { listings } = this.state;
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
                        <h3 className="mb-0 black">All Listing</h3>
                      </div>
                      <div className="col text-right">
                        <Button color="primary" href="#pablo" onClick={(e) => e.preventDefault()} size="sm">
                          See all
                        </Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center bg-black" responsive>
                    <thead className="thead-dark">
                      <tr>
                        <th className="text-color" scope="col">
                          Listing Title
                        </th>
                        <th className="text-color" scope="col">
                          Category
                        </th>
                        <th className="text-color" scope="col">
                          Post City{" "}
                        </th>
                        <th className="text-color" scope="col">
                          Publish Date
                        </th>
                        <th className="text-color" scope="col">
                          Post Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-none">
                      {listings.map((i, k) => {
                        return (
                          <tr className="text-color" key={k}>
                            <th scope="row">{i.postingTitle}</th>
                            <td>{i.categoryType}</td>
                            <td>{i.postCity}</td>
                            <td>{i.publishDate}</td>
                            <td>{i.postingType}</td>
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
        getListing,
      },
      state
    ),
  };
};

export default connect(null, mapDispatchToProps)(Listing);
// const mapDispatchToProps = {};
