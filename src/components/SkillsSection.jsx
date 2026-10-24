import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { skillsData } from '../data/portfolioData';

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = skillsData.filter((skill) => {
    if (activeFilter === 'all') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="skills" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <span className="section-tag">// Tech Stack</span>
          <h2 className="section-title">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-desc">
            Technologies, libraries, and frameworks I use to bring ideas to life. Always keen to learn and adopt new tools.
          </p>

          {/* Filter Pills */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Technologies ({skillsData.length})
            </button>
            <button
              className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('frontend')}
            >
              Frontend &amp; UI
            </button>
            <button
              className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('backend')}
            >
              Backend &amp; Database
            </button>
            <button
              className={`filter-btn ${activeFilter === 'tools' ? 'active' : ''}`}
              onClick={() => setActiveFilter('tools')}
            >
              Tools &amp; Languages
            </button>
          </div>
        </div>

        <Row className="g-4">
          {filteredSkills.map((skill) => (
            <Col xs={6} sm={4} md={3} lg={2} key={skill.name}>
              <div className="skill-card">
                <div className="skill-icon-wrap">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-level">{skill.tag}</span>

                <div className="w-100 mt-3 px-1">
                  <div className="d-flex justify-content-between small text-dim font-mono mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <ProgressBar
                    now={skill.level}
                    style={{ height: '5px', backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                    className="rounded-pill"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Learning banner */}
        <div className="mt-5 p-4 glass-card text-center text-md-start">
          <Row className="align-items-center g-3">
            <Col md={8}>
              <div className="d-flex align-items-center gap-3">
                <div className="fs-1 text-info">
                  <i className="bi bi-lightbulb-fill"></i>
                </div>
                <div>
                  <h4 className="h5 fw-bold text-light mb-1">Passionate About Continuous Learning</h4>
                  <p className="text-muted mb-0 small">
                    Currently deepening knowledge in full-stack architecture, API security, and state management solutions.
                    Ready to adapt to any stack your engineering team uses!
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="text-md-end">
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle font-mono p-2 px-3">
                <i className="bi bi-rocket-takeoff-fill me-1"></i> Rapid Learner
              </span>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
