import { Link } from 'react-router-dom';

const Herobanner = () => {
  return (
    <div className="relative">
      <img
        src="../herobanner.webp"
        alt="Background image"
        className="h-96 w-full object-cover md:h-[700px]"
      />
      <div
        className=" xs:bottom-[-50px] absolute bottom-[-100px] left-1/2 w-72 max-w-7xl -translate-x-1/2  transform rounded-md
       bg-main bg-opacity-60 px-4 py-8 shadow-md backdrop-blur-sm sm:bottom-[-100px] md:bottom-24 md:left-1/4 md:w-96 md:p-16"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className=" font-header text-3xl font-bold text-backgroundwhite shadow-sm text-shadow-lg md:text-5xl">
            BOOK
          </h1>
          <h2 className="font-header text-2xl font-medium text-backgroundwhite shadow-sm text-shadow-lg md:text-4xl">
            Your Next
          </h2>
          <h3 className="font-header text-2xl font-bold text-backgroundwhite shadow-sm text-shadow-lg md:text-4xl">
            GET Away
          </h3>
          <Link to="/Accommodations">
            <h4 className="border-b-4 border-second font-header text-3xl font-bold text-backgroundwhite shadow-sm text-shadow-lg md:text-5xl">
              HERE !
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
