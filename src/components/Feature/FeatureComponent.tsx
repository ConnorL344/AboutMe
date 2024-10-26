import { Container } from "react-bootstrap"
import { FaReact, FaAngular, FaDatabase } from 'react-icons/fa'
import { SiDotnet, SiAzuredevops, SiTypescript, SiCsharp, SiMongodb } from 'react-icons/si'
import './FeatureComponent.css'

export default function FeatureComponent(){
  const skills = [
    {
        icon: <SiDotnet size={30} className="text-primary me-3" />,
        title: ".NET Development",
        description: "5+ years building scalable backend services and APIs"
    },
    {
        icon: <FaAngular size={30} className="text-danger me-3" />,
        title: "Angular",
        description: "Enterprise application development with Angular 2+"
    },
    {
        icon: <SiAzuredevops size={30} className="text-info me-3" />,
        title: "Azure & DevOps",
        description: "Cloud architecture and CI/CD pipeline implementation"
    },
    {
        icon: <FaReact size={30} className="text-primary me-3" />,
        title: "React",
        description: "Building modern web applications with React"
    },
    {
        icon: <SiTypescript size={30} className="text-primary me-3" />,
        title: "TypeScript",
        description: "Strong typing for scalable JavaScript applications"
    },
    {
        icon: <SiCsharp size={30} className="text-purple me-3" />,
        title: "C#",
        description: "Object-oriented programming and system design"
    },
    {
        icon: <FaDatabase size={30} className="text-secondary me-3" />,
        title: "SQL",
        description: "Database design and optimization"
    },
    {
        icon: <SiMongodb size={30} className="text-success me-3" />,
        title: "MongoDB",
        description: "NoSQL database development and integration"
    }
]

  return(
      <div className="container" id="icon-grid">   
          <Container className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pt-2">
              {skills.map((skill, index) => (
                  <div key={index} className="col d-flex align-items-start">
                      <div className="skill-card p-3 border rounded shadow-sm hover-effect">
                          {skill.icon}
                          <div>
                              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">{skill.title}</h3>
                              <p>{skill.description}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </Container>
      </div>
  )
}