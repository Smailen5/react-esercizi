/* eslint-disable no-unused-vars */
import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ErrorMessage, Footer, Loading, Navbar } from "../components";
import useFetch from "../useFetch";
import useTitle from "../useTitle";

const SingleCocktailScreen = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useFetch(`i=${id}`, true);
  useTitle(data && data[0] ? data[0].strDrink : "Not found");
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
        <div className="cocktail-container container md:px-14">
          <header className="cocktail-container containe m-4 mt-6 flex items-center gap-4 md:mb-12">
            <Link to="/">
              <IoArrowBackCircleSharp className="text-4xl text-pink-500" />
            </Link>
            <h4 className="text-sm uppercase tracking-wide text-gray-400 md:text-base">
              torna in home
            </h4>
          </header>

          <hr className="mx-4 my-8 md:hidden" />

          {/* sezione immagine, nome e categoria */}
          <div className="mx-4 md:flex md:justify-start md:gap-40">
            <img src={img} alt={name} className="rounded md:h-96" />
            <div className="cocktail-details">
              <div className="mt-6 md:mt-0">
                <h2 className="text-3xl font-bold uppercase md:text-4xl md:mb-6">
                  {name}
                </h2>
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

              <hr className="md:hidden" />

              {/* sezione ingredienti */}
              <div className="my-4">
                <h4 className="font-bold text-gray-500 md:mb-8 md:text-lg">
                  ingredienti:
                </h4>
                <ul className="mt-2 list-outside list-disc">
                  {strInstructionsList.map((el, index) => {
                    if (el.istruzione) {
                      return (
                        <li key={index} className="ml-4">
                          <p className="text-gray-400">
                            {el.qty} {el.istruzione}
                          </p>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>

              <hr className="md:hidden" />

              {/* sezione istruzioni */}
              <div className="mt-4">
                <h4 className="font-bold text-gray-500 md:mb-8 md:text-lg">
                  istruzioni:
                </h4>
                <p className="text-gray-400">
                  {strInstructionsIT ? strInstructionsIT : strInstructions}
                </p>
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
  min-height: 84vh;
  padding-bottom: 4rem;
`;

export default SingleCocktailScreen;
