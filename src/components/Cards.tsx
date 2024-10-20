import { Card, Button } from "react-bootstrap";
import { cardsdsModel } from "../interfaces/cards-model";

export default function Cards(props: cardsdsModel) {
  return (
    <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
  )
}  