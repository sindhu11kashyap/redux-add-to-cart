import React from 'react';
import AddToCart from '../img/AddToCart.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Header(props) {
    return (
        <>
        <Container>
            <Row>
            <Col xs={12}>           
                <h1 className='mt-3'>Header Components</h1>
            <Image src={AddToCart} className='float-end' fluid roundedCircle width={50} />
            <span className='position-absolute cartIcon'>{props.data.length}</span>
            </Col>
            </Row>
            </Container>
        </>
    )
}

export default Header;