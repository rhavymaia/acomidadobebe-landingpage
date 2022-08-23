import Carousel from 'react-bootstrap/Carousel';

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";

export default function CCarousel() {
    return (
        <>
            <Carousel fade controls={false} interval={5000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="Cuida da alimentação do seu bebê"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Cuida da alimentação do seu bebê"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
