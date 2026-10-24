import React from 'react';
import { Modal, Button, Row, Col, Badge } from 'react-bootstrap';
import { personalInfo, skillsData, projectsData, educationData } from '../data/portfolioData';

const ResumeModal = ({ show, onHide }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      contentClassName="modal-content-custom"
    >
      <Modal.Header closeButton closeVariant="white" className="modal-header-custom">
        <Modal.Title className="fw-bold d-flex align-items-center gap-2">
          <i className="bi bi-file-earmark-person-fill text-info"></i>
          <span>Curriculum Vitae / Resume</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        {/* Header Block */}
        <div className="border-bottom border-secondary-subtle pb-4 mb-4">
          <Row className="align-items-center">
            <Col sm={8}>
              <h3 className="fw-bold text-gradient mb-1">{personalInfo.name}</h3>
              <p className="text-light h6 mb-2">{personalInfo.role}</p>
              <div className="d-flex flex-wrap gap-3 text-muted small font-mono">
                <span>
                  <i className="bi bi-geo-alt me-1 text-danger"></i> {personalInfo.location}
                </span>
                <span>
                  <i className="bi bi-envelope me-1 text-info"></i> {personalInfo.email}
                </span>
              </div>
            </Col>
            <Col sm={4} className="text-sm-end mt-3 mt-sm-0">
              <Badge bg="success" className="font-mono p-2">
                Available for Hire
              </Badge>
            </Col>
          </Row>
        </div>

        {/* Professional Summary */}
        <div className="mb-4">
          <h5 className="text-info font-mono text-uppercase small mb-2">// Professional Summary</h5>
          <p className="text-muted small lh-lg mb-0">{personalInfo.fullAbout}</p>
        </div>

        {/* Education */}
        <div className="mb-4">
          <h5 className="text-info font-mono text-uppercase small mb-3">// Education &amp; Training</h5>
          {educationData.map((edu) => (
            <div key={edu.id} className="mb-3 p-3 rounded-3 bg-dark-subtle border border-secondary-subtle">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="text-light fw-bold mb-0">{edu.degree}</h6>
                <Badge bg="info" className="font-mono small">
                  {edu.status}
                </Badge>
              </div>
              <p className="text-info small mb-1">{edu.institution} ({edu.affiliation})</p>
              <p className="text-muted small mb-0">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Key Projects */}
        <div className="mb-4">
          <h5 className="text-info font-mono text-uppercase small mb-3">// Key Projects</h5>
          <Row className="g-2">
            {projectsData.slice(0, 3).map((proj) => (
              <Col md={12} key={proj.id}>
                <div className="p-3 rounded-3 bg-dark-subtle border border-secondary-subtle">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="text-light fw-bold small">{proj.title}</span>
                    <span className="text-dim font-mono" style={{ fontSize: '0.75rem' }}>
                      {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-muted small mb-0">{proj.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Technical Skills */}
        <div>
          <h5 className="text-info font-mono text-uppercase small mb-2">// Technical Skills</h5>
          <div className="d-flex flex-wrap gap-2">
            {skillsData.map((s) => (
              <span key={s.name} className="tech-tag">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom gap-2">
        <Button variant="outline-secondary" className="btn-glass" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-info" className="btn-glass" onClick={handlePrint}>
          <i className="bi bi-printer"></i> Print / PDF
        </Button>
        <Button
          as="a"
          href={`mailto:${personalInfo.email}?subject=Job Opportunity / Project Inquiry`}
          className="btn-gradient"
        >
          <i className="bi bi-envelope-paper-fill"></i> Contact Pratik
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ResumeModal;
