import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";
import PropTypes from "prop-types";
import { useGlobalContext } from "../context";

const Cocktail = ({ strDrinkThumb: img, idDrink: _id, strDrink: name }) => {
  const [show, setShow] = useState(true);
  const { getScrollPosition } = useGlobalContext();
  const navigate = useNavigate();

  const goToCocktail = (_id) => {
    getScrollPosition(window.scrollY);
    navigate(`/cocktail/${_id}`);
  };

  const showInfo = () => {
    setShow(true);
  };
  const hideInfo = () => {
    setShow(false);
  };
  return (
    <Wrapper id={_id} onMouseEnter={showInfo} onMouseLeave={hideInfo}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className={
          show ? "card-text show-info container" : "card-text container"
        }
      >
        <h5>{name}</h5>
        <div className="see-more-btn" onClick={() => goToCocktail(_id)}>
          <h5>ricetta</h5>
          <HiClipboardList />
        </div>
      </div>

      <div className="card-text-sm container">
        <h5>{name}</h5>
        <div className="see-more-btn" onClick={() => goToCocktail(_id)}>
          <h5>ricetta</h5>
          <HiClipboardList />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  width: 80%;
  margin: auto;
  border-radius: var(--img-radius);
  display: grid;
  box-shadow: var(--light-shadow);

  .img {
    width: 100%;
    height: 300px;
    border-radius: var(--img-radius);
  }

  .card-text-sm {
    display: flex;
    padding: 1rem;
  }

  .card-text,
  .card-text-sm {
    justify-content: space-between;
    align-items: center;
  }

  .card-text {
    display: none;
  }

  .see-more-btn {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.7rem;
    transition: var(--transition);
    color: rgb(236, 72, 153); /* colore di tailwind pink-500 */
  }

  .see-more-btn:hover svg,
  .see-more-btn:hover h5 {
    color: var(--byzantine);
  }

  .see-more-btn:hover h5 {
    text-decoration: underline;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
    margin: unset;

    .card-text {
      position: absolute;
      bottom: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
      width: 100%;
      background-color: transparent;
      color: var(--text-color);
      transition: var(--transition);
      display: flex !important;
      color: #fff;
      padding: 1rem;
    }

    .show-info {
      background-color: transparent;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      height: 20%;
    }
    .card-text-sm {
      display: none;
    }
  }
`;

Cocktail.propTypes = {
  strDrinkThumb: PropTypes.string,
  strDrink: PropTypes.string,
  idDrink: PropTypes.string,
};

export default Cocktail;
