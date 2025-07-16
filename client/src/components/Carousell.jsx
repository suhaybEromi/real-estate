import { Carousel } from "react-bootstrap";
import empire3 from "../assets/empire-3.jpg";
import empire4 from "../assets/empire-4.jpg";
import empire5 from "../assets/empire-5.jpg";
import TextCarousel from "./TextCarousel";

export default function Carousell() {
  return (
    <section>
      <Carousel fade controls={false} indicators={false} interval={4000}>
        <Carousel.Item>
          <img
            src={empire3}
            className="d-block w-100"
            alt="First slide"
            style={{
              maxHeight: "600px",
              objectFit: "fill",
              filter: "brightness(40%)",
            }}
          />
          <TextCarousel />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={empire4}
            className="d-block w-100"
            alt="Second slide"
            style={{
              maxHeight: "600px",
              objectFit: "cover",
              filter: "brightness(40%)",
            }}
          />
          <TextCarousel />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={empire5}
            className="d-block w-100"
            alt="Third slide"
            style={{
              maxHeight: "600px",
              objectFit: "cover",
              filter: "brightness(40%)",
            }}
          />
          <TextCarousel />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
