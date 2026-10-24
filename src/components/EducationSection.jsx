import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { educationData } from '../data/portfolioData';

const EducationSection = () => {
  return (
    <section id="education" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">// Academic Journey</span>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Training</span>
          </h2>
          <p className="section-desc">
            Bridging university engineering foundations with modern, industry-standard full-stack web development.
          </p>
        </div>

        <Row className="g-4">
          {educationData.map((item) => (
            <Col lg={6} key={item.id}>
              <div className="timeline-card">
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <div className="timeline-logo-wrap">
                    <img
                      src={item.logo}
                      alt={item.institution}
                      className="timeline-logo-img"
                    />
                  </div>
                  <Badge bg="success" className="font-mono fw-normal p-2">
                    <i className="bi bi-clock-history me-1"></i> {item.status}
                  </Badge>
                </div>

                <h3 className="h4 text-gradient fw-bold mb-1">{item.degree}</h3>
                <h4 className="h6 text-light fw-semibold mb-1">{item.institution}</h4>
                <p className="text-muted small font-mono mb-3">{item.affiliation}</p>

                <p className="text-muted lh-lg mb-4">{item.description}</p>

                {item.highlights && (
                  <div>
                    <h5 className="text-info font-mono small text-uppercase mb-2">Core Focus Areas:</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {item.highlights.map((h, idx) => (
                        <span key={idx} className="tech-tag">
                          <i className="bi bi-check-circle-fill text-success me-1"></i>
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EducationSection;
