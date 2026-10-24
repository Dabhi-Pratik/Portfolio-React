import React, { useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FooterComponent from './components/FooterComponent';
import ResumeModal from './components/ResumeModal';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };

  return (
    <div className="portfolio-app position-relative">
      {/* Sticky Glass Navbar */}
      <NavbarComponent onOpenResume={() => setShowResume(true)} />

      {/* Main Portfolio Sections */}
      <main>
        <HeroSection onOpenResume={() => setShowResume(true)} />
        <AboutSection
          onOpenResume={() => setShowResume(true)}
          onShowToast={triggerToast}
        />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection onShowToast={triggerToast} />
      </main>

      {/* Footer */}
      <FooterComponent />

      {/* Interactive Resume Modal */}
      <ResumeModal
        show={showResume}
        onHide={() => setShowResume(false)}
      />

      {/* Floating Notification Toast */}
      <ToastContainer position="bottom-end" className="p-3 position-fixed" style={{ zIndex: 9999 }}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3500}
          autohide
          className="bg-dark text-light border border-info shadow-lg"
        >
          <Toast.Header closeButton closeVariant="white" className="bg-dark-subtle text-light border-bottom border-secondary">
            <i className="bi bi-info-circle-fill text-info me-2"></i>
            <strong className="me-auto font-mono">Notification</strong>
            <small className="text-muted">Just now</small>
          </Toast.Header>
          <Toast.Body className="font-mono small">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default App;
