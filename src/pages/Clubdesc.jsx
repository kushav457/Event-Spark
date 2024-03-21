import React, {useState , useEffect } from "react";

import "../styles/card.css";
import clubdesc from "../assets/data/clubdesc";
import { Container, Row , Col } from "reactstrap";
import Clubdesc from "../shared/Clubdesc";

const Club = () => {

   

    return (
        <>
        <section className="pt-0">
                <Container>
                    <Row>
                        {
                            clubdesc?.map(clubd=>(
                            <div lg='3' className="m-3" key={clubd.id}>
                            <Clubdesc clubd={clubd} /> 
                            </div>))
                        }
                       
                    </Row>
                </Container>
            </section>
            
            
            
        </>
    )
};
    
export default Club;