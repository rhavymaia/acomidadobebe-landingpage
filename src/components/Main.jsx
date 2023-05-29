import "bootstrap/dist/css/bootstrap.min.css";
import CCarousel from "./CCarousel";
import CardsGroup from "./CardsGroup";

export default function Main() {
  return (
    <div
    // style={{paddingBottom: "90px"}}
    >
      <CCarousel></CCarousel>
      <CardsGroup></CardsGroup>
    </div>
  );
}
