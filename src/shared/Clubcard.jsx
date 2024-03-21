import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';




const ClubCard = ({tour}) =>{
  const navigate= useNavigate();
  function gotoclubdesc(){
    navigate("/clubdesc")
  }

    const {id, title, event, desc, photo } = tour;

    return(
        <div>
            <Card
        style={{
          width: '18rem' 
        }}
        
      >
       <img src={photo} style={{aspectRatio:1/1, objectFit:'cover'}} alt="" />
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {event}
          </CardSubtitle>
          <CardText>
            {desc} 
          </CardText>
          <Button class="btn btn-outline-primary"  onClick={gotoclubdesc}>
            Know More
          </Button>
        </CardBody>
      </Card></div>

    )
}

export default ClubCard;