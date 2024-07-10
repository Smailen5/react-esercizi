import PropTypes from "prop-types";

const Button = ({ children, buttonClass }) => {
  return (
    <button
      className={`${buttonClass} rounded-full bg-pink-500 p-2 px-5 text-sm font-semibold uppercase text-white transition-colors duration-500 hover:bg-violet-900`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonClass: PropTypes.string,
};

export default Button ;
