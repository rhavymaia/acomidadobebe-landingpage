import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CCarousel from './Carousel';
import CardsGroup from './CardsGroup';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header></Header>
      <CCarousel></CCarousel>
      <CardsGroup></CardsGroup>
      <Footer></Footer>
    </>
  );
}
