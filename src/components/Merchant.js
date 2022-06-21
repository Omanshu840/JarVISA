import React from 'react'
import { Card, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import offersData from "../static/offers";

const offers = offersData;

const Merchant = (props) => {
    
    const {offerId} = useParams()

    return (
        <div>
            <Container>
                <h2>Merchants</h2>
                
                <Row>
                    <div className="p-2">
                        {offers.Offers[offerId].merchantList.map((item, index) => {
                            return(
                                <Card className="shadow-1 p-2 my-2">
                                    <Row>
                                        <img src="https://picsum.photos/seed/picsum/400" className="col-3" alt="img"/>
                                        <div className="col-9">
                                            <h6>{item.merchant}</h6>
                                            {/* <p>{item.merchantAddress[1].address1}</p> */}
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

export default Merchant