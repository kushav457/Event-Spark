import React, {useState , useEffect } from "react";

import "../styles/card.css";
import clubdata from "../assets/data/clubdata";
import { Container, Row , Col } from "reactstrap";
import ClubCard from "../shared/Clubcard";

const Club = () => {

    const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const clubPerPage = 3;

  useEffect(() => {
    const pages = Math.ceil(clubdata.length / clubPerPage);
    setPageCount(pages);
  }, [clubdata]);

  const indexOfLastEvent = (currentPage + 1) * clubPerPage;
  const indexOfFirstEvent = indexOfLastEvent - clubPerPage;
  const currentEvents = clubdata.slice(indexOfFirstEvent, indexOfLastEvent);

  return (
    <>
      <section className="pt-0">
        <Container>
          <Row>
            {currentEvents.map((tour) => (
              <Col lg="4" className="mb-3" key={tour.id}>
                <ClubCard tour={tour} />
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
export default Club;