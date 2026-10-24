import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { personalInfo } from '../data/portfolioData';

const NavbarComponent = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'reviews', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveNav(sectionId);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="nav-brand-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-badge">&lt;/&gt;</span>
          <span>{personalInfo.name}</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className="border-0 text-light bg-dark-subtle"
        >
          <i className={`bi ${expanded ? 'bi-x-lg' : 'bi-list'} fs-4 text-light`}></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center gap-1 my-2 my-lg-0">
            <Nav.Link
              href="#home"
              className={`nav-link-custom ${activeNav === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`nav-link-custom ${activeNav === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`nav-link-custom ${activeNav === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`nav-link-custom ${activeNav === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#education"
              className={`nav-link-custom ${activeNav === 'education' ? 'active' : ''}`}
              onClick={() => handleNavClick('education')}
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#reviews"
              className={`nav-link-custom ${activeNav === 'reviews' ? 'active' : ''}`}
              onClick={() => handleNavClick('reviews')}
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-link-custom ${activeNav === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </Nav.Link>

            <div className="d-flex gap-2 ms-lg-3 mt-3 mt-lg-0">
              <Button
                variant="outline-info"
                size="sm"
                className="btn-glass px-3 py-1 font-mono d-none d-xl-inline-flex"
                onClick={onOpenResume}
              >
                <i className="bi bi-file-earmark-person"></i> Resume
              </Button>
              <Button
                as="a"
                href="#contact"
                className="btn-gradient px-3 py-1 text-decoration-none"
                onClick={() => handleNavClick('contact')}
              >
                Hire Me
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
