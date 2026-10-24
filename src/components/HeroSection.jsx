import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { personalInfo } from '../data/portfolioData';

const HeroSection = ({ onOpenResume }) => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTagline = personalInfo.taglines[taglineIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length + 1));
        if (displayText.length === currentTagline.length) {
          setTimeout(() => setIsDeleting(true), 1500);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7} className="text-center text-lg-start">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Available for Work & Internships</span>
            </div>

            <p className="font-mono text-info mb-2 fs-6">
              &lt;code&gt; Hello, World! &#x1F44B; &lt;/code&gt;
            </p>

            <h1 className="hero-heading mb-3">
              I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>

            <div className="hero-subtitle mb-4">
              <span className="text-light">A </span>
              <span className="text-gradient-cyan fw-bold font-mono">{displayText}</span>
              <span className="text-info fw-bold animate-blink">|</span>
            </div>

            <p className="hero-bio mb-4 pe-lg-4">
              A passionate developer crafting sleek, performant, and responsive web applications with{' '}
              <strong className="text-light">React.js</strong>,{' '}
              <strong className="text-light">Bootstrap 5</strong>, and{' '}
              <strong className="text-light">Node.js</strong>. Based in{' '}
              <span className="text-info">Bhavnagar, Gujarat &#x1F1EE;&#x1F1F3;</span>
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <Button as="a" href="#projects" className="btn-gradient">
                <i className="bi bi-grid-fill"></i> View My Work
              </Button>
              <Button as="a" href="#contact" className="btn-glass">
                <i className="bi bi-chat-dots-fill"></i> Let's Talk
              </Button>
              <Button variant="outline-light" className="btn-glass" onClick={onOpenResume}>
                <i className="bi bi-file-earmark-arrow-down-fill"></i> Resume
              </Button>
            </div>

            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start pt-2">
              <span className="text-dim font-mono fs-6">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                aria-label="Send Email"
                title="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a
                href="#contact"
                className="social-btn"
                aria-label="Contact Section"
                title="Contact Info"
              >
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </Col>

          <Col lg={5} className="text-center">
            <div className="avatar-wrapper">
              <div className="avatar-glow"></div>
              <div className="avatar-img-container">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="avatar-img-inner"
                  onError={(e) => {
                    // Fallback to avatar.png if profile.jpg has any issue
                    e.target.onerror = null;
                    e.target.src = '/avatar.png';
                  }}
                />
              </div>

              {/* Floating tech badges */}
              <div className="floating-pill pill-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  width="20"
                  height="20"
                />
                <span>React.js</span>
              </div>

              <div className="floating-pill pill-2">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                  width="20"
                  height="20"
                />
                <span>Bootstrap 5</span>
              </div>

              <div className="floating-pill pill-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  width="20"
                  height="20"
                />
                <span>Node.js</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
