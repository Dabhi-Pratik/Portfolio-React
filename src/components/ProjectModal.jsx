import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

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
          <span>{project.title}</span>
          {project.featured && (
            <Badge bg="info" className="fs-6 font-mono fw-normal">
              Featured
            </Badge>
          )}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <div className="rounded-3 overflow-hidden mb-4 border border-secondary-subtle">
          <img
            src={project.image}
            alt={project.title}
            className="w-100"
            style={{ maxHeight: '350px', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>

        <h5 className="text-light fw-bold mb-2">Project Overview</h5>
        <p className="text-muted lh-lg mb-4">{project.longDescription || project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h6 className="text-info font-mono text-uppercase mb-2 small">// Key Highlights &amp; Features</h6>
            <ul className="text-light-blue ps-3 mb-0">
              {project.highlights.map((h, i) => (
                <li key={i} className="mb-1 text-muted">
                  <span className="text-light">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h6 className="text-info font-mono text-uppercase mb-2 small">// Technologies Used</h6>
          <div className="d-flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="modal-footer-custom gap-2">
        <Button variant="outline-secondary" className="btn-glass" onClick={onHide}>
          Close
        </Button>
        {project.githubUrl && (
          <Button
            as="a"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline-light"
            className="btn-glass"
          >
            <i className="bi bi-github"></i> Source Code
          </Button>
        )}
        {project.liveUrl && (
          <Button
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-gradient"
          >
            <i className="bi bi-box-arrow-up-right"></i> Live Project
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;
