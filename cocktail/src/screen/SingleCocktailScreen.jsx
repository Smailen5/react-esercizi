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
            <header className="m-4">
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

  const {
    strDrink: name,
    strDrinkThumb: img,
    strCategory: category,
    strAlcoholic: type,
    strGlass,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strInstructionsIT,
    strInstructions,
  } = data[0];
  // console.log(data[0].strDrink);
  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="cocktail-container container">
          <header className="cocktail-container containe m-4 mt-6 flex items-center gap-4">
            <Link to="/">
              <IoArrowBackCircleSharp className="text-4xl text-pink-500" />
            </Link>
            <h4 className="text-sm uppercase tracking-wide text-gray-400">
              torna in home
            </h4>
          </header>

          <hr className="mx-4 my-8" />

          <div className="cocktail-container mx-4">
            <img src={img} alt={name} className="rounded" />
            <div className="cocktail-details">
              <div className="mt-6">
                <h2 className="text-3xl font-bold uppercase">{name}</h2>
                <div className="my-2 flex gap-4">
                  <p className="rounded border bg-gray-50 px-2 py-1 text-xs font-semibold uppercase text-gray-400">
                    {type}
                  </p>
                  <p className="rounded border bg-gray-50 px-2 py-1 text-xs font-semibold uppercase text-gray-400">
                    {category}
                  </p>
                  <p className="rounded border bg-gray-50 px-2 py-1 text-xs font-semibold uppercase text-gray-400">
                    {strGlass}
                  </p>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <h4 className="font-bold text-gray-500">ingredienti:</h4>
                <ul className="list-disc list-outside mt-2">
                  {strInstructionsList.map((el, index) => {
                    if (el.istruzione) {
                      return (
                        <li key={index} className="ml-4 ">
                          <p className="text-gray-500">
                            {el.qty} {el.istruzione}
                          </p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
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
