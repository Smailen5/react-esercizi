import backImage from "../assets/image/home-hero.jpg";
import PropTypes from "prop-types";
const Hero = ({ children, img, disableOverlay }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${img || backImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      {/* se disableOverlay è false, mostra l'overlay altrimenti non lo mostra */}
      {!disableOverlay && (
        <div className="absolute inset-0 bg-black opacity-60" />
      )}

      <div className="container relative z-10 mx-auto flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  img: PropTypes.string,
  disableOverlay: PropTypes.bool,
};

export default Hero;
