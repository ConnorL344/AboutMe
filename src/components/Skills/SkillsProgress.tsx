import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const skills = [
  { name: '.NET', level: 90 },
  { name: 'Angular', level: 85 },
  { name: 'Azure', level: 80 },
  { name: 'React', level: 70 },
  { name: 'TypeScript', level: 85 },
  { name: 'SQL', level: 80 }
];

const SkillsProgress = () => (
  <Container className="my-5">
    <h3 className="mb-4">Technical Proficiency</h3>
    <Row>
      {skills.map((skill, index) => (
        <Col md={6} key={skill.name} className="mb-3">
          <div className="d-flex justify-content-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: index * 0.2 }}
          >
            <ProgressBar now={skill.level} variant="primary" />
          </motion.div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default SkillsProgress;
