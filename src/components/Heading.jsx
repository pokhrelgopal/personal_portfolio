/* eslint-disable react/prop-types */
const Heading = ({ title }) => {
  return (
    <div className="bg-heading border-y border-y-darkGray">
      <h1 className=" container mx-auto text-light px-4 md:px-16 text-3xl md:text-4xl py-6 md:py-8 font-semibold md:font-bold tracking-wide">
        {title}
      </h1>
    </div>
  );
};

export default Heading;
