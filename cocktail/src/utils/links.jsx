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
    icon: <AiFillHome className="nav-icon" />,
  },
  {
    url: "/about",
    text: "Chi Siamo",
    icon: <RiTeamFill className="nav-icon" />,
  },
  {
    url: "/contattaci",
    text: "contattaci",
    icon: <AiFillMessage className="nav-icon" />,
  },
];

const LinkComponent = ({ classLink }) => {
  return (
    <ul className={classLink}>
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.url} className="nav-item">
            <div className="nav-link">
              {link.icon}
              <h5 className="nav-text">{link.text}</h5>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

const socialLink = [
  {
    url: "https://www.facebook.com/",
    icon: <FaFacebookSquare className="nav-icon" />,
  },
  {
    url: "https://twitter.com/home?lang=it",
    icon: <FaTwitterSquare className="nav-icon" />,
  },
  {
    url: "https://www.youtube.com/",
    icon: <FaYoutubeSquare className="nav-icon" />,
  },
];

const SocialComponent = ({ classSocial }) => {
  return (
    <ul className={classSocial}>
      {socialLink.map((link) => {
        return (
          <li key={link.url} className="nav-item">
            <a href={link.url} alt={link.url} className="nav-link">
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

LinkComponent.propTypes = {
  classLink: PropTypes.string,
};

SocialComponent.propTypes = {
  classSocial: PropTypes.string,
};

export { LinkComponent, SocialComponent };

