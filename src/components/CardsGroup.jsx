import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

export const CardsGroup = () => {
    return (
        <CardGroup>
            <Card
            style={{'padding':'20px', 'border':'0', 'width':'100%'}}
            >
                <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
            style={{'padding':'20px', 'border':'0'}}
            >
                <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
            style={{'padding':'20px', 'border':'0'}}
            >
                <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
            style={{'padding':'20px', 'border':'0'}}
            >
                <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card
            style={{'padding':'20px', 'border':'0'}}
            >
                <Card.Img variant="top" src="http://refeicoes.cotanet.com.br/img/site/produtos/comida-fit-entrega-a-domicilio.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
