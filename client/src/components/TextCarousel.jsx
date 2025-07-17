import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import HeaderSearch from "./HeaderSearch";

const textOnImage = {
  color: "white",
  fontWeight: "bold",
  position: "absolute",
  left: "50%",
  top: "60%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
};

export default function TextCarousel() {
  return (
    <>
      <div style={textOnImage}>
        <h1>Silver Villa Real Estate</h1>
        <TypeAnimation
          sequence={[
            "Your Dream Home Awaits",
            2000,
            "Luxury Living Redefined",
            2000,
            "Invest in Your Future",
            2000,
            "Experience Elegance",
            2000,
          ]}
          wrapper="h3"
          speed={50}
          repeat={Infinity}
        />
        <button className="btn btn-primary mt-3 w-25 btn-lg rounded-pill">
          <Link to={"/contact"} className="text-decoration-none text-light">
            Contact Us
          </Link>
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <HeaderSearch />
      </div>
    </>
  );
}
