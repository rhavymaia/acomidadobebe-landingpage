import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const Cards = () => {
    return (
        <Row xs={1} md={2} className="g-5">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card
                    style={{'width': '100%','margin':'0', 'padding':'20px', 'border':'0'}}
                    >
                        <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Cards;