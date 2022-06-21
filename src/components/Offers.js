import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import offersData from "../static/offers";

const offers = offersData

const Offers = () => {
    return (
        <div className="Merchant">
            <Container>
                <h2>Nearby Offers</h2>
                
                <Row>
                    <div className="p-2">
                        {offers.Offers.map((item, index) => {
                            return(
                                <Card className="shadow-1 p-2 my-2">
                                    <Row>
                                        <img src="https://picsum.photos/seed/picsum/400" className="col-3" alt="img"/>
                                        <div className="col-9">
                                            <h6>{item.programName}</h6>
                                            <p>{item.offerTitle}</p>
                                            <Link to={{
                                                pathname: `/offers/${index}`,
                                                state: {
                                                    data: item.merchantList 
                                                }    
                                            }}
                                            >
                                                <Button className="btn-sm">Check Merchants</Button>
                                            </Link>
                                        </div>
                                    </Row>
                                </Card>
                            )
                        })}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Offers;