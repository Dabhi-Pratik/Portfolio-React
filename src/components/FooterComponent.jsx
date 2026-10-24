import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

const FooterComponent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-4 align-items-center justify-content-between mb-4">
          <Col md={5} className="text-center text-md-start">
            <div className="d-inline-flex align-items-center gap-2 mb-2">
              <span className="logo-badge">&lt;/&gt;</span>
              <span className="h4 fw-bold text-light mb-0">{personalInfo.name}</span>
            </div>
            <p className="text-muted small pe-md-4 mb-3">
              Full-Stack Developer passionate about creating responsive, high-performance web applications using React, Bootstrap, and Node.js.
            </p>
            <div className="d-flex gap-2 justify-content-center justify-content-md-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center">
            <h5 className="text-light h6 fw-bold mb-3 font-mono text-uppercase">// Quick Navigation</h5>
            <div className="d-flex flex-wrap justify-content-center gap-3 font-mono small">
              <a href="#home" className="text-muted text-decoration-none hover-text-light">
                Home
              </a>
              <a href="#about" className="text-muted text-decoration-none hover-text-light">
                About
              </a>
              <a href="#skills" className="text-muted text-decoration-none hover-text-light">
                Skills
              </a>
              <a href="#projects" className="text-muted text-decoration-none hover-text-light">
                Projects
              </a>
              <a href="#education" className="text-muted text-decoration-none hover-text-light">
                Education
              </a>
              <a href="#reviews" className="text-muted text-decoration-none hover-text-light">
                Reviews
              </a>
              <a href="#contact" className="text-muted text-decoration-none hover-text-light">
                Contact
              </a>
            </div>
          </Col>

          <Col md={3} className="text-center text-md-end">
            <button
              onClick={scrollToTop}
              className="btn btn-glass px-3 py-2 small font-mono"
              title="Back to Top"
            >
              <i className="bi bi-arrow-up-circle me-1 text-info"></i> Back to Top
            </button>
          </Col>
        </Row>

        <div className="border-top border-secondary-subtle pt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-dim font-mono" style={{ fontSize: '0.85rem' }}>
          <div>
            &copy; {CURRENT_YEAR} {personalInfo.name}. All rights reserved.
          </div>
          <div className="text-center text-sm-end">
            Built with <span className="text-danger">&hearts;</span> using{' '}
            <span className="text-info">React</span> &amp;{' '}
            <span className="text-primary">React Bootstrap</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
