import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <section id="projects" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">// Featured Work</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-desc">
            A showcase of e-commerce web applications, educational platforms, and interactive JavaScript utilities.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              className={`filter-btn ${filter === 'web-apps' ? 'active' : ''}`}
              onClick={() => setFilter('web-apps')}
            >
              Web Apps &amp; Platforms (3)
            </button>
            <button
              className={`filter-btn ${filter === 'utilities' ? 'active' : ''}`}
              onClick={() => setFilter('utilities')}
            >
              Utilities &amp; Calculators (3)
            </button>
          </div>
        </div>

        <Row className="g-4">
          {filteredProjects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <div className="project-card">
                <div className="project-img-wrap">
                  {project.featured && (
                    <span className="project-tag-featured font-mono">
                      <i className="bi bi-star-fill me-1"></i> Featured
                    </span>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback placeholder with nice gradient if image has issue
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag text-info">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="d-flex gap-2 pt-2 border-top border-secondary-subtle mt-auto">
                    {project.liveUrl && project.liveUrl.startsWith('http') && !project.liveUrl.includes('blob/main') ? (
                      <Button
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        size="sm"
                        className="btn-gradient flex-grow-1 text-decoration-none"
                      >
                        <i className="bi bi-box-arrow-up-right"></i> Live Demo
                      </Button>
                    ) : (
                      <Button
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        size="sm"
                        className="btn-gradient flex-grow-1 text-decoration-none"
                      >
                        <i className="bi bi-github"></i> View Code
                      </Button>
                    )}

                    <Button
                      variant="outline-light"
                      size="sm"
                      className="btn-glass"
                      onClick={() => handleOpenDetails(project)}
                      title="View Details"
                    >
                      <i className="bi bi-info-circle"></i> Details
                    </Button>

                    {project.githubUrl && (
                      <Button
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        variant="outline-secondary"
                        size="sm"
                        className="btn-glass px-2"
                        title="GitHub Source"
                      >
                        <i className="bi bi-github"></i>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Detailed Modal */}
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection;
