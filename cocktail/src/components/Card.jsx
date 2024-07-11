/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
const Card = ({ title, text, icon, className, subtitle, img }) => {
  return (
    <Wrapper className={className ? `${className}` : ""}>
      <div className="card container">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        {subtitle ? (
          <div className="card-subtitle">
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className="card-icon">{icon}</div>
        )}
        {text ? (
          <div className="card-text">{text}</div>
        ) : (
          <img src={img} alt={title} className="card-img" />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
  border-radius: var(--radius);
  transition: var(--transition);
  .value-card:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: var(--trypan-blue-2);
    .card-title {
      color: white;
    }
    .card-text p {
      color: var(--extra-light-gray);
    }
  }
  .card {
    display: grid;
    place-items: center;
    text-align: center;
    gap: 1rem;
    .card-subtitle {
      font-size: 1.1rem !important;
      color: var(--dark-gray);
    }
    .card-icon {
      font-size: 2rem !important;
      padding: 0;
    }
    .card-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      filter: brightness(80%);
    }
    .card-text {
      margin-top: 0.3rem;
      max-width: 35ch;
    }
  }
`;

export default Card;

{
  /* <div className="card">
  <h3 className="card-title">{title}</h3>
  <div className="card-icon">{icon}</div>
  <p className="card-subtitle card-text">{text}</p>
</div>; */
}
