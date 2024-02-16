import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import teddybear from '../img/teddybear.png';


function Home(props){
  
    return(
        <>
            <Container>
                <Row>
                    <Col md={12}>                      
                           
                        <Col xs={12} md={5} className='mt-5'>
                        <Card>
                        
                            <Card.Body className='d-block d-md-flex'>
                            <Col md={4}>
                            <Card.Img variant="top" src={teddybear} fluid className='float-start ' />
                            <span className='pt-5'>Price:500.00</span>
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Title>Teddy Bear</Card.Title>
                                <Card.Text>
                                    
A comforting companion through nights of darkness, a teddy bear whispers secrets to soothe the soul.
                                </Card.Text>
                               
                                <Button onClick={()=>{props.addToCartHandler({Price:500, Name: 'TeddyBear'})}} variant="primary" className='btn btn-primary p-2 me-1'>Add to Cart</Button>
                               
                                <Button onClick={()=>{props.removeToCartHandler()}} variant="primary" className="btn btn-danger mt-2 mt-lg-0 p-2">Remove From Cart</Button>
                                
                                </Col> 
                            </Card.Body>
                        </Card>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Home;