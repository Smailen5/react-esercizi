import PropTypes from "prop-types";
import styled from "styled-components";
const ErrorMessage = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-self: flex-start;
  margin: 2rem;
  background-color: rgba(255, 10, 84, 0.2);
  color: rgba(255, 10, 84, 0.8);
  border: 1px solid rgba(255, 10, 84, 1);
  height: 50px;
  border-radius: 0.35rem;
  display: flex;
  align-items: center;
  h4 {
    text-transform: lowercase;
    font-variant: small-caps;
    margin-left: 0.5rem;
    color: inherit;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`;

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorMessage;
