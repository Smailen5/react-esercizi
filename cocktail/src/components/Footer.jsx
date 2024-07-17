import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-violet-800 p-4">
      <div>
        <p className="text-sm font-semibold uppercase text-white">
          all © reserved to
          <Link to="/about" className="text-pink-500">
            {" "}
            drink team
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
