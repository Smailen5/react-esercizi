/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import styled from "styled-components";
const Card = ({ title, text, icon, className, subtitle, img }) => {
  return (
    // se className e definito prende il valore, altrimenti lascia vuoto
    <article
      className={`{className ? ${className} : ""} grid place-items-center`}
    >
      <div className="grid w-4/5 place-items-center gap-4">
        <h4 className="font-bold tracking-wider group-hover:text-gray-200">
          {title}
        </h4>

        {subtitle ? (
          <div className="text-sm font-semibold text-gray-500">
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className="text-3xl text-pink-500">{icon}</div>
        )}
        {text ? (
          <div className="text-center text-gray-400 group-hover:text-gray-200">
            {text}
          </div>
        ) : (
          <div className="">
            <div
              className={`h-52 w-52 rounded-full bg-cover ${title !== "Tatyana Doglieva" && "bg-top"}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
            {/* <img src={img} alt={title} className="h-52 w-52 rounded-full" /> */}
          </div>
        )}
      </div>
    </article>
  );
};

// const Wrapper = styled.article`
//   padding-top: 2rem;
//   padding-bottom: 2rem;
//   background-color: white;
//   border-radius: var(--radius);
//   transition: var(--transition);
//   .value-card:hover {
//     cursor: pointer;
//     transform: scale(1.03);
//     background-color: var(--trypan-blue-2);
//     .card-title {
//       color: white;
//     }
//     .card-text p {
//       color: var(--extra-light-gray);
//     }
//   }
//   .card {
//     display: grid;
//     place-items: center;
//     text-align: center;
//     gap: 1rem;
//     .card-subtitle {
//       font-size: 1.1rem !important;
//       color: var(--dark-gray);
//     }
//     .card-icon {
//       font-size: 2rem !important;
//       padding: 0;
//     }
//     .card-img {
//       width: 200px;
//       height: 200px;
//       border-radius: 50%;
//       filter: brightness(80%);
//     }
//     .card-text {
//       margin-top: 0.3rem;
//       max-width: 35ch;
//     }
//   }
// `;

export default Card;
