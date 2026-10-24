import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { testimonialsData } from '../data/portfolioData';

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">// Peer Feedback</span>
          <h2 className="section-title">
            Project <span className="text-gradient">Reviews</span>
          </h2>
          <p className="section-desc">
            What fellow developers, peers, and collaborators say about my projects and code quality.
          </p>
        </div>

        <Row className="g-4">
          {testimonialsData.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <div className="review-card">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="review-stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <i className="bi bi-quote text-info fs-2 opacity-50"></i>
                </div>

                <p className="review-quote mb-4">"{item.quote}"</p>

                <div className="d-flex align-items-center gap-3 mt-auto pt-3 border-top border-secondary-subtle">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="reviewer-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="reviewer-initial"
                    style={{ display: item.avatar ? 'none' : 'flex' }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="h6 text-light fw-bold mb-0">{item.name}</h4>
                    <p className="text-muted small mb-0 font-mono">{item.role}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
