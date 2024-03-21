import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import dandiya from "../assets/images/dandiya.jpg";
const upcomingEvents = [
  {   image: dandiya,  },
  {   image: dandiya, },
  {   image: dandiya, },
  {   image: dandiya, }

];

const LifeInTheWild = () => {
  return (
    <section className="upcoming-events mt-0">
                <Container>
                    <h2 className="mb-3" align="center">Gallery</h2>
                    <div className="d-flex flex-row flex-nowrap overflow-auto">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="card mx-5">
                              
                                    <div className="card-body">
                                    <img src={event.image} alt="" className="card-img-top" />
                                        <h5 className="card-title">{event.name}</h5>
                                        <p className="card-text"></p>
                                    </div>
                                
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
  );
};

export default LifeInTheWild;
