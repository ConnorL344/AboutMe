
import { Container } from 'react-bootstrap';
import Cards from './Cards';
import { projects } from '../removeWithBe/dummyData';

export default function Home() {
  return (
    <Container className='py-4'>
        {
          projects.map((project) => (
            <Cards key={project.id} {...project} />
          ))
        }
    </Container>
  );
}