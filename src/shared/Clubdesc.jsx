import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Clubdesc = ({clubd}) =>{

    const {id, title, desc } = clubd;


    return (
        <Container className="py-5">
        <Row className="justify-content-center">
            <Col md={8}>

                <p className="lead text-center">
                    <h3><b> {title}</b></h3>
                </p>
                <p>
                    {desc}

                </p>
               
            </Col>
        </Row>
    </Container>
        /* <div>
             <h1 className='text-center'>Welcome to Event Spark</h1>
         </div>*/
    );
}

export default Clubdesc;
