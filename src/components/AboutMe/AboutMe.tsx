import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFileDownload, FaDumbbell, FaBook, FaFistRaised } from 'react-icons/fa';
import FeatureComponent from '../Feature/FeatureComponent';
import { TypeAnimation } from 'react-type-animation';
import './AboutMe.css';

import me from '../../assets/me.jpg'
import codingHtml from '../../assets/coding-html.jpg'
import PageTransition from '../Common/PageTransition';
import SkillsProgress from '../Skills/SkillsProgress';
import ScrollToTop from '../Common/ScrollToTop';

const AboutMe: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Connor_Laverty_CV.docx';
    link.download = 'Connor_Laverty_CV.docx';
    link.click();
  };

  return (
    <PageTransition>
      <div>
        <Container fluid className='px-2'>
          <Container className='my-4'>
            <Row>
              <Col md={6} className='d-flex flex-column justify-content-center align-items-center text-center'>
                <h2 className="mb-4">
                  <TypeAnimation
                    sequence={[
                      'About Me',
                      1000,
                      'Full Stack Developer',
                      1000,
                      'Tech Enthusiast',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
                <div className="about-content">
                  <p>
                    Hello! I'm Connor, a Full Stack Developer with over 5 years experience developing in mainly <b>.NET, Azure & Angular</b> with an ironic dislike for css.
                  </p>
                  <div className="interests-section mt-4">
                    <h4>When I'm Not Coding</h4>
                    <div className="interests-icons">
                      <div className="interest-item">
                        <FaDumbbell size={25} />
                        <span>Gym Training</span>
                      </div>
                      <div className="interest-item">
                        <FaBook size={25} />
                        <span>Reading</span>
                      </div>
                      <div className="interest-item">
                        <FaFistRaised size={25} />
                        <span>MMA</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-links mt-4">
                  <Button variant="outline-primary" className="me-3" href="https://www.linkedin.com/in/connorlaverty/" target="_blank">
                    <FaLinkedin className="me-2" /> LinkedIn
                  </Button>
                  <Button variant="outline-success" onClick={handleDownloadCV}>
                    <FaFileDownload className="me-2" /> Download CV
                  </Button>
                </div>
              </Col>
              <Col md={6} className='d-flex align-items-center justify-content-center'>
                <div className="profile-image-container">
                  <img
                    src={me}
                    alt="Connor"
                    className="profile-image"
                    style={{ maxHeight: '300px', width: 'auto' }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className='my-4'>
            <Row>
              <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
                <div className="journey-image-container">
                  <img
                    src={codingHtml}
                    alt="Coding Journey"
                    className="journey-image"
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
                  />
                </div>
              </Col>
              <Col md={6} className='text-center'>
                <h3 className="journey-title">My Journey</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <h4>2018</h4>
                    <p>Started Professional Development Career</p>
                  </div>
                  <div className="timeline-item">
                    <h4>2020</h4>
                    <p>Mastered .NET & Angular Development</p>
                  </div>
                  <div className="timeline-item">
                    <h4>2023</h4>
                    <p>Expanding into React & Modern Web Technologies</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <FeatureComponent />
        <SkillsProgress />
        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default AboutMe;