import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import me from '../../assets/me.jpg'
import golfing from '../../assets/golfing.jpg'
import codingHtml from '../../assets/coding-html.jpg'
import gaming from '../../assets/gaming.jpg'
import reading from '../../assets/reading.jpg'
import mma from '../../assets/mma.jpg'

const AboutMe: React.FC = () => {
  return (
    <Container fluid className='px-2'>
      <Container className='my-4'>
        <Row>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>About Me</h2>
            <p>
              Hello! I'm Connor, a Full Stack Developer with over 5 years experience developing in mainly <b>.NET, Azure & Angular</b> with an ironic dislike for css.
              If I am not working I am either at the gym, reading or tapping in MMA class.
              This website is subject to massive changes most likely UI related as I get a chance desinging instead of just implementing.
            </p>
            <p>
              This website is as basic as it gets, but I am learning React and though a SPA would be a good place to start.
              There is 0 state used here, no fancy hooks or effects.
              It is styled using Bootstrap just because I havent used this library before.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={me}
              alt="Your Name"
              className="img-fluid rounded mx-auto d-block"
              style={{ maxHeight: '300px', width: 'auto', objectFit: 'cover' }}
            />
          </Col>
        </Row>
      </Container>
      <Container className='my-4'>
        <Row>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
            <img
              src={codingHtml}
              alt="Your Name"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} className='text-center'>
            <h3>My Journey</h3>
            <p>
              My development career kicked off right after graduating from the University of Ulster with a BSc Hons in Computing Science. I started with Windows Forms, which was quite a shift from my Java background, but it opened the door to the world of C# and .NET.
            </p>
            <p>
              As I progressed, I embraced the role of a Full Stack Developer, diving deep into .NET, Azure, and Angular. This journey has been marked by continuous learning and professional growth, allowing me to work on diverse and challenging projects.
            </p>
            <p>
              At Lightwell Inc (Eliassen), I've worn multiple hats. I've led the development of internal core applications, crafted innovative components using the latest Angular standards, and even ventured into Gen AI offerings. My work has involved everything from enhancing user interfaces to implementing complex backend logic.
            </p>
            <p>
              Throughout my career, I've worked with a diverse tech stack including Angular, TypeScript, PrimeNG, .NET, C#, Azure, MongoDB, CosmosDB, SQL, and Entity Framework. I've also gained proficiency in tools like Azure DevOps and Jenkins for CI/CD pipelines.
            </p>
            <p>
              Beyond coding, I'm committed to continuous learning. I've earned certifications in Microsoft Programming in C#, Querying Data with Transact-SQL, and Developing Solutions for Microsoft Azure. These certifications have deepened my expertise and kept me updated with the latest industry standards.
            </p>
          </Col>
        </Row>
      </Container>
      <Container className='my-4'>
        <Row>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center text-center'>
            <h3>My Interests</h3>
            <p>Gaming: I enjoy playing competitive shooters like Valorant and Warzone. Recently, I've been diving into the action-packed world of Space Marine 2.</p>
            <p>Reading: I'm a big fan of action-packed novels. Jack Reacher series by Lee Child is a favorite, and I also enjoy books like "The Ninja" by Eric Van Lustbader.</p>
            <p>Golfing: While I'm still working on improving my game, I find golfing to be a relaxing and challenging sport. It's a great way to spend time outdoors and work on my precision skills.</p>
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center'>
            <Row className='py-2'>
              <Col>
                <img
                  src={golfing}
                  alt="Coding"
                  className="img-fluid rounded"
                />
              </Col>
              <Col>
                <img
                  src={gaming}
                  alt="Coding"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  src={reading}
                  alt="Coding"
                  className="img-fluid rounded"
                />
              </Col>
              <Col>
                <img
                  src={mma}
                  alt="Coding"
                  className="img-fluid rounded"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default AboutMe;
