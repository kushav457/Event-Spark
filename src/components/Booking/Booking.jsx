import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import './booking.css';
import { jsPDF } from "jspdf";
import registerImg from "./book3.png"
import userIcon from "./book2.png"
import qr from "./qr.png"
import logo from"./logo.png"

const Booking = () => {
    const [credentials, setCredentials] = useState({
        Name: undefined,
        email: undefined,
        phone: undefined,
        ticket: undefined,
    });

    const handleChage = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = e => {
        e.preventDefault();
        // Create a new PDF document
        const doc = new jsPDF();
        //Adding Logo
        const logoData=logo;
        doc.addImage(logoData,'PNG',75,20,70,50);

        // Add image
        const imgData = qr;
        doc.addImage(imgData, 'PNG', 85, 100, 50, 50);

        // Add text to the document
        const text = `
            Name: ${credentials.Name}
            Email: ${credentials.email}
            Phone: ${credentials.phone}
            Number of Tickets: ${credentials.ticket}
        `;
        doc.text(text, 100, 150, { align: 'center' });

        //Border

        doc.rect(5, 5, doc.internal.pageSize.getWidth() - 10, doc.internal.pageSize.getHeight() - 10, 'S');
        

        // Save the document with a filename
        doc.save("booking_details.pdf");
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login_container d-flex align-items-between">
                            <div className="login_img mt-4" >
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login_form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Book Ticket</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder="Name"
                                            required id="Name" onChange={handleChage} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email"
                                            required id="email" onChange={handleChage} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="tel" placeholder="Phone"
                                            required id="phone" onChange={handleChage} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="number" maxLength="3" placeholder="Number of Ticket Max:3"
                                            required id="ticket" onChange={handleChage} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth_btn"
                                        type="submit">
                                        Book Now
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Booking;
