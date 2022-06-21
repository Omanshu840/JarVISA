import { Card, Row, Container, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "Household", y: 6235 },
    { x: "Transportation", y: 7023 },
    { x: "Food", y: 7569 },
    { x: "Apparel", y: 10431 },
    { x: "Social Life", y: 6000 },
    { x: "Beauty", y: 1609 },
    { x: "Other", y: 8000 },
];  

const Dashboard = () => {
    return (
        <div className="Dashboard mt-3">
            <Container>
                <Row>
                    <div className="col-4 p-2">
                        <Card className="text-center p-2 shadow-1">
                            <Card.Body>
                                <p>10000</p>
                                <h6>Income</h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4 p-2">
                        <Card className="text-center p-2 shadow-1">
                            <Card.Body>
                                <p>10000</p>
                                <h6>Expense</h6>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4 p-2">
                        <Card className="text-center p-2 shadow-1">
                            <Card.Body>
                                <p>10000</p>
                                <h6>Total</h6>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>

                <Row className="text-center mt-4 p-2">
                    <div className="card shadow-1 pt-4">
                        <h2>June 2022</h2>
                        <div>
                            <VictoryPie
                            data={myData}
                            colorScale={["#D3D3D3", "#808080", "#A9A9A9"]}
                            radius={100}
                            />
                        </div>
                    </div>
                </Row>

                <Row className="p-2">
                    <Table striped bordered hover>
                        <tbody>
                            {myData.map((item, index) => {
                                return (
                                    <tr>
                                        <td><Badge bg="primary"><h6>{item.y}</h6></Badge></td>
                                        <td>{item.x}</td>
                                        <td>@mdo</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>

                <Link to="/payment">
                    <div class="float pt-3">
                        {/* <i class="fa fa-plus my-float"></i> */}
                        Pay
                    </div>
                </Link>
            </Container>
        </div>
    )
}

export default Dashboard;