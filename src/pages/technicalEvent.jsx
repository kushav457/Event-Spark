import React, { useState, useEffect } from "react";
import "../styles/card.css";
import Techeventdata from "../assets/data/Techeventdata";
import { Container, Row, Col } from "reactstrap";
import EventCard from "../shared/EventCard";

const Event = () => {
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 3; // Display 3 events per page

  useEffect(() => {
    const pages = Math.ceil(Techeventdata.length / eventsPerPage);
    setPageCount(pages);
  }, [Techeventdata]);

  const indexOfLastEvent = (currentPage + 1) * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = Techeventdata.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <>
      <section className="pt-0">
        <Container>
          <Row>
            {currentEvents.map((tour) => (
              <Col lg="4" className="mb-3" key={tour.id}>
                <EventCard tour={tour} />
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={currentPage === number ? "active_page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Event;
