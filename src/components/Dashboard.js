import { Card, Row, Container, Table, Badge } from "react-bootstrap";
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "Group A", y: 900 },
    { x: "Group B", y: 400 },
    { x: "Group C", y: 300 },
];  

const Dashboard = () => {
    return (
        <div className="Dahsboard mt-3">
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

                <Row className="text-center mt-5">
                    <h2>June 2022</h2>
                    <div>
                        <VictoryPie
                        data={myData}
                        colorScale={["#D3D3D3", "#808080", "#A9A9A9"]}
                        radius={100}
                        />
                    </div>
                </Row>

                <Row className="p-2">
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td><Badge bg="primary"><h6>28%</h6></Badge></td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;