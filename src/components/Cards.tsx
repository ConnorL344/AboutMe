import { Card, Button } from "react-bootstrap";
import { cardsModel } from "../interfaces/cards-model";

export default function Cards(props: cardsModel) {
  return (
    <Card style={{ width: '18rem' }} >
    <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
    </Card.Body>
    </Card>
  )
}  