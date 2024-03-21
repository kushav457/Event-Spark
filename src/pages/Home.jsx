import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Subtitle from "../shared/Subtitle";
import '../styles/home.css';

// Define paths to images and videos
import heroImg from '../assets/images/hero-img01.avif';
import heroImg02 from '../assets/images/hero-img02.avif';
import heroVideo from '../assets/images/hero-video2.mp4';
import worldImg from '../assets/images/logo2.jpeg'; 
import dandiya from "../assets/images/dandiya.jpg";
import fresher from "../assets/images/fresher.jpg";
import sports from "../assets/images/sports.jpg";
import inno from "../assets/images/entrepreneurship.jpg";


const Home = () => {
    // Sample array of upcoming events (replace this with actual data)
    const upcomingEvents = [
        { date: '2024-03-15', name: 'Dandiya Night', image: dandiya,  link: '/booking' },
        { date: '2024-03-20', name: 'NexGen Nite', image: fresher, link: '/booking' },
        { date: '2024-03-25', name: 'Pinnacle Playoffs', image: sports, link: '/booking' },
        { date: '2024-04-01', name: 'InnoVision Summit', image: inno, link: '/booking' }
      
    ];

    return (
        <>
      

            {/* ===== hero section start ===== */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero_content">
                                <div className="hero_subtitle d-flex align-items-center">
                                    <Subtitle subtitle={'Let Celebrate Together ! '}/>
                                    <img src={worldImg} alt="" />
                                </div>
                                <h1>Welcom to VIT 
                                    <span className="highlight "> Event Spark</span>
                                </h1>
                                <p>
                                    Transforming visions into unforgettable experiences, VIT College's Event Management team orchestrates seamless gatherings tailored to your needs. From concept to execution, let us elevate your events with precision and creativity
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero_image-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero_image-box mt-4">
                                <video src={heroVideo} alt="" loop muted autoPlay/>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero_image-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* ===== hero section end ===== */}

            {/* ===== Upcoming Events Section ===== */}
            <section className="upcoming-events mt-1">
                <Container>
                    <h2 className="mb-3" align="center">Upcoming Events</h2>
                    <div className="d-flex flex-row flex-nowrap overflow-auto">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="card mx-5 ccard">
                                <a href={event.link} target="_blank" rel="noopener noreferrer">
                                    <div className="card-body ">
                                    <img src={event.image} alt={event.name} width="100" height="100" className="card-img-top" />
                                        <h5 className="card-title">{event.name}</h5>
                                        <p className="card-text">Date: {event.date}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            {/* ===== End of Upcoming Events Section ===== */}
        </>
    );
};

export default Home;
