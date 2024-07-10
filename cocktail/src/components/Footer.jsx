const Footer = () => {
  return (
    <footer className="flex justify-center bg-violet-800 p-4">
      <div>
        <p className="text-sm font-semibold uppercase text-white">
          all © reserved to
          {/* ricordati di collegare il link al 'team' */}
          <a href="#" className="text-pink-500">
            {" "}
            drink team
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
