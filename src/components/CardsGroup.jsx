import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import "./cards.css";

import gerencie from "../assets/images/gerencie.png";
import lista from "../assets/images/lista.png";
import cardapio from "../assets/images/cardapio.png";
import receita from "../assets/images/receita.png";

export default function CardsGroup() {
    return (
        <CardGroup
        style={{padding:'50px'}} >
            <Card className="cards">
                <Card.Img className="cards-img"
                variant="top" 
                src={gerencie} />
                <Card.Body>
                <Card.Title>Gerencie</Card.Title>
                <Card.Text className="cards-text" >
                    Gerencie a dieta da sua família e, principalmente, do seu bebê de uma forma fácil e prática.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cards">
                <Card.Img className="cards-img"
                variant="top" 
                src={lista} />
                <Card.Body>
                <Card.Title>Crie listas de compras</Card.Title>
                <Card.Text className="cards-text" >
                    Deixe sua lista de compras sempre atualizada de acordo com seu cardápio.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cards">
                <Card.Img className="cards-img"
                variant="top" 
                src={cardapio} />
                <Card.Body>
                <Card.Title>Personalize seus cardápios</Card.Title>
                <Card.Text className="cards-text" >
                    Deixe seu cardápio com a carinha de cada membro da família.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="cards">
                <Card.Img className="cards-img"
                variant="top" 
                src={receita} />
                <Card.Body>
                <Card.Title>Use receitas</Card.Title>
                <Card.Text className="cards-text" >
                    Na dúvida do que preparar? Utilize alguma das receitas que disponibilizmaos para você e sua família.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}
