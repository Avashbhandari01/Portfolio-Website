const Heading = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start sm:self-center md:self-center lg:self-center">
      {text}
    </h1>
  );
};

export default Heading;
