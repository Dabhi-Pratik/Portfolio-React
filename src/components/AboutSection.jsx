import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { personalInfo } from '../data/portfolioData';

const AboutSection = ({ onOpenResume, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast('Email copied to clipboard!');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">// Who I Am</span>
          <h2 className="section-title">
            About <span className="text-gradient">My Journey</span>
          </h2>
          <p className="section-desc">
            Passionate about transforming creative ideas into clean, functional, and responsive digital products.
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-direction-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="p-2 rounded-3 bg-primary-subtle text-primary fs-3">
                    <i className="bi bi-person-lines-fill"></i>
                  </div>
                  <div>
                    <h3 className="h4 fw-bold text-light mb-0">Frontend & Full-Stack Developer</h3>
                    <p className="text-muted font-mono mb-0 small">Bhavnagar, Gujarat, India</p>
                  </div>
                </div>

                <p className="text-light-blue fs-6 mb-3 lh-lg">
                  I am <strong className="text-light">{personalInfo.name}</strong>, an Information Technology engineering
                  student at <strong className="text-info">{personalInfo.college}</strong> (affiliated with GTU) and a Full-Stack
                  development scholar at <strong className="text-info">{personalInfo.institute}</strong>.
                </p>

                <p className="text-muted fs-6 mb-3 lh-lg">
                  I thrive on crafting modern user interfaces that feel smooth, fast, and accessible across every screen size.
                  With a solid foundation in <span className="text-light">HTML5, CSS3, modern JavaScript, and React.js</span>,
                  along with backend skills in <span className="text-light">Node.js, Express, and MongoDB</span>, I enjoy
                  building complete end-to-end web applications.
                </p>

                <p className="text-muted fs-6 mb-4 lh-lg">
                  Whether creating intuitive e-commerce stores, responsive e-learning portals, or interactive utility calculators,
                  my focus is always on high performance, clean architecture, and delightful user experience.
                </p>
              </div>

              {/* Stats Row */}
              <Row className="g-3 pt-3 border-top border-secondary-subtle">
                {personalInfo.stats.map((stat, idx) => (
                  <Col xs={6} sm={3} key={idx}>
                    <div className="stat-card">
                      <div className="text-gradient fs-3 fw-bold">{stat.value}</div>
                      <div className="stat-label mt-1">{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col lg={5}>
            <div className="glass-card p-4 p-md-4 h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="fw-bold text-light mb-3 pb-2 border-bottom border-secondary-subtle d-flex align-items-center justify-content-between">
                  <span>Fast Profile Facts</span>
                  <Badge bg="success" className="font-mono fw-normal">
                    <i className="bi bi-patch-check"></i> Active
                  </Badge>
                </h4>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3 p-2 rounded-3 bg-dark-subtle">
                    <i className="bi bi-geo-alt-fill text-danger fs-5 mt-1"></i>
                    <div>
                      <small className="text-dim text-uppercase font-mono">Location</small>
                      <div className="text-light fw-medium">{personalInfo.location}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded-3 bg-dark-subtle">
                    <i className="bi bi-mortarboard-fill text-warning fs-5 mt-1"></i>
                    <div>
                      <small className="text-dim text-uppercase font-mono">Degree & University</small>
                      <div className="text-light fw-medium">{personalInfo.degree}</div>
                      <small className="text-muted">{personalInfo.university}</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded-3 bg-dark-subtle">
                    <i className="bi bi-envelope-check-fill text-info fs-5 mt-1"></i>
                    <div className="w-100">
                      <small className="text-dim text-uppercase font-mono">Email Address</small>
                      <div className="text-light fw-medium text-break">{personalInfo.email}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded-3 bg-dark-subtle">
                    <i className="bi bi-translate text-primary fs-5 mt-1"></i>
                    <div>
                      <small className="text-dim text-uppercase font-mono">Languages</small>
                      <div className="text-light fw-medium">{personalInfo.languages.join(' • ')}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 p-2 rounded-3 bg-dark-subtle">
                    <i className="bi bi-briefcase-fill text-success fs-5 mt-1"></i>
                    <div>
                      <small className="text-dim text-uppercase font-mono">Employment Status</small>
                      <div className="text-success fw-semibold">Open to Work & Collaborations</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 pt-2">
                <Button
                  variant="outline-info"
                  className="flex-grow-1 btn-glass d-flex align-items-center justify-content-center gap-2"
                  onClick={handleCopyEmail}
                >
                  <i className={`bi ${copied ? 'bi-check2-circle text-success' : 'bi-clipboard'}`}></i>
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </Button>
                <Button
                  className="flex-grow-1 btn-gradient d-flex align-items-center justify-content-center gap-2"
                  onClick={onOpenResume}
                >
                  <i className="bi bi-download"></i>
                  <span>View Resume</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
