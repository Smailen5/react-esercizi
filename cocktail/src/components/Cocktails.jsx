import Cocktail from "./Cocktail";
import styled from "styled-components";
import PropTypes from "prop-types";

const Cocktails = ({ data }) => {
  return (
    <Wrapper>
      {data.map((cocktail) => (
        <Cocktail key={cocktail.idDrink} {...cocktail} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 20vh;
  display: grid;
  place-items: center;
  gap: 2rem;
  @media screen and (min-width: 753px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 3rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

Cocktails.propTypes = {
  data: PropTypes.array.isRequired,
};
export default Cocktails;
