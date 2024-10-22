import { Card } from "react-bootstrap";
import { cardsModel } from "../../interfaces/cards-model";

export default function Cards(props: cardsModel) {
  return (
    <Card style={{height: '15rem' }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text flex-grow-1">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
