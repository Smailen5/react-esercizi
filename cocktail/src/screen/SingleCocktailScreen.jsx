/* eslint-disable no-unused-vars */
import React from "react";
import { Loading, ErrorMessage, Navbar, Footer } from "../components";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import useFetch from "../useFetch";

const SingleCocktailScreen = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useFetch(`i=${id}`, true);
  if (isLoading) {
    return (
      <>
        <Navbar />
        <Wrapper>
          <Loading />
        </Wrapper>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <Navbar />
        <Wrapper>
          {/* la classe cocktail-container viene applicata ma non ci sono stili */}
          <div className="cocktail-container container h-[74vh]">
            <header className="m-8">
              <Link to="/">
                <IoArrowBackCircleSharp className="text-2xl text-pink-500" />
                Back
              </Link>
            </header>
            <ErrorMessage>Cocktail non trovato</ErrorMessage>
          </div>
        </Wrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="cocktail-container container">
          <header className="cocktail-container container m-8">
            <Link to="/">
              <IoArrowBackCircleSharp className="text-2xl text-pink-500" />
              Back
            </Link>
          </header>
          <div className="cocktail-details">
            <img src={data.strDrinkThumb} alt={data.strDrink} className="img" />
            <div className="cocktail-details">
              <h2>{data.strDrink}</h2>
              <p className="info">{data.strInstructions}</p>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};
const Wrapper = styled.section`
  height: auto;
  padding-bottom: 4rem;
  .spacer {
    display: grid;
    gap: 0.325rem;
  }
  .cocktail-content {
    display: grid;
    gap: 2rem;
    header {
      display: grid;
      align-items: center;
      justify-content: flex-start;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-top: 2rem;
      margin-bottom: 0;
      .icon {
        font-size: 2.5rem;
        transition: var(--transition);
        &:hover {
          color: var(--byzantine);
          transform: scale(1.02);
        }
      }
      .back-arrow {
        text-transform: uppercase;
        color: var(--primary-gray);
        font-weight: 500;
      }
    }
    .cocktail-container {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;
      .img {
        width: 100%;
        border-radius: var(--radius);
      }
      .cocktail-details {
        display: grid;
        gap: 1rem;
        h2 {
          text-transform: uppercase;
        }
        .cocktail-type {
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: flex-start;
          gap: 0.5rem !important;
          .label {
            text-transform: lowercase;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: var(--letter-spacing);
            font-variant: small-caps;
            color: var(--soft-dark-gray);
            border: 1px solid var(--soft-light-gray);
            border-radius: var(--radius);
            background-color: var(--extra-light-gray);
            padding: 0rem 0.5rem;
          }
        }
        .info {
          color: var(--soft-dark-gray);
          max-width: 55ch;
        }
        h4 {
          color: var(--dark-gray);
        }
        .instruction-list {
          list-style: outside;
          padding-left: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 753px) {
    min-height: 84.5vh;
    hr {
      display: none;
    }
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 500px;
        grid-column: 1/6;
        grid-row: 1/1;
        width: 100%;
      }
      .cocktail-details {
        grid-column: 6/-1;
        grid-row: 1/1;
        width: 100%;
        gap: 1rem !important;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 600px;
        grid-column: 1/5;
        grid-row: 1/1;
        width: 100%;
      }
    }
  }
`;

export default SingleCocktailScreen;
