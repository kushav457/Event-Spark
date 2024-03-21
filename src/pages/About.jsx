import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
import about3 from '../assets/images/about3.png';
import about4 from '../assets/images/about4.jpg';

const About = () => {

    return (
      <section className="py-5">
      <div className="container">
        <div className="row gx-4 align-items-center justify-content-between">
          <div className="col-md-5 order-2 order-md-1">
            <div className="mt-5 mt-md-0">
            
              <h2 className="display-5 fw-bold ">About Us</h2>
              <p className="lead">Experience seamless event planning with our innovative website, where every 
                         detail is meticulously curated to bring your vision to life.
                         From venue selection to guest management, we streamline the process,
                         ensuring your event is unforgettable. Trust us to elevate your occasions with
                         creativity, precision, and unparalleled expertise. Let's transform your ideas 
                         into extraordinary experiences together.</p>
              <p className="lead">"Elevate your occasions with our comprehensive suite of event management tools,
                     empowering you to create unforgettable experiences effortlessly."
                    "From venue selection to guest coordination, our website offers the perfect 
                     blend of convenience and customization, ensuring your events exceed expectations
                     every time."</p>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 order-1 order-md-2">
            <div className="row gx-2 gx-lg-3">
              <div className="col-6">
                <div className="mb-2"><img className="img-fluid rounded-3" src={about1} /></div>
              </div>
              <div className="col-6">
                <div className="mb-2"><img className="img-fluid rounded-3" src={about2}/></div>
              </div>
              <div className="col-6">
                <div class="mb-2"><img className="img-fluid rounded-3" src={about3}/></div>
              </div>
              <div className="col-6">
                <div className="mb-2"><img className="img-fluid rounded-3" src={about4}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    );
}

export default About;
