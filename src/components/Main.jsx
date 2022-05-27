import "bootstrap/dist/css/bootstrap.min.css";
import { CCarousel } from "./CCarousel";
import { CardsGroup } from "./CardsGroup";

export const Main = () => {
  return (
    <>
      <CCarousel></CCarousel>
      <CardsGroup></CardsGroup>
    </>
  );
}
