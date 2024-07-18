import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import animationData from "../assets/animation/animation-404.json";
import { Button, Footer, Navbar } from "../components";

const ErrorScreen = () => {
  return (
    <>
      <Navbar />
      <Wrapper className="h-dvh">
        <h3 className="font-semibold">Pagina non trovata</h3>
        <div>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
        <Button>
          <Link to="/" aria-label="Torna in home" role="button">Torna in home</Link>
        </Button>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
