import PropTypes from "prop-types";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const links = [
  {
    url: "/",
    text: "Home",
    icon: <AiFillHome className="text-lg text-violet-800" />,
  },
  {
    url: "/about",
    text: "Chi Siamo",
    icon: <RiTeamFill className="text-lg text-violet-800" />,
  },
  {
    url: "/contact",
    text: "contattaci",
    icon: <AiFillMessage className="text-lg text-violet-800" />,
  },
];

// Link navigazione
const ListItem = ({ classItem }) => {
  return (
    <>
      <ul className={classItem}>
        {links.map((link) => {
          const { text, url, icon } = link;
          return (
            <Link key={text} to={url}>
              <li className="flex items-center gap-2 transition-all hover:scale-105">
                {icon}
                <h5 className="font-semibold uppercase">{text}</h5>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className="text-xl text-violet-800" />,
  },
  {
    url: "https://twitter.com/home?lang=it",
    icon: <FaTwitterSquare className="text-xl text-violet-800" />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutubeSquare className="text-xl text-violet-800" />,
  },
];

// Icone social network
const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        const { url, icon } = link;
        return (
          <li key={url} className="hover:scale-150 mx-4 transition-all">
            <a href={url} alt={url}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

// Prop validation
ListItem.propTypes = {
  classItem: PropTypes.string,
};
SocialComponent.propTypes = {
  classSocial: PropTypes.string,
};

export { ListItem, SocialComponent };