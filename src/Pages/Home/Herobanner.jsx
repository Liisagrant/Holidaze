import { Link } from 'react-router-dom';

const Herobanner = () => {
  return (
    <div className="relative">
      <img
        src="../herobanner-image.jpg"
        alt="Background image"
        className="w-full h-96 md:h-[700px] object-cover"
      />
      <div
        className=" max-w-7xl absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 bg-main  py-8 px-4
       md:p-16 rounded-md shadow-md backdrop-blur-sm bg-opacity-60 md:bottom-24 md:left-1/4 sm:bottom-[-100px] xs:bottom-[-50px]"
      >
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className=" text-3xl md:text-5xl text-backgroundwhite shadow-sm font-bold font-header text-shadow-lg">
            BOOK
          </h1>
          <h2 className="text-2xl md:text-4xl text-backgroundwhite shadow-sm font-medium font-header text-shadow-lg">
            Your Next
          </h2>
          <h3 className="text-2xl md:text-4xl text-backgroundwhite shadow-sm font-bold font-header text-shadow-lg">
            GET Away
          </h3>
          <Link to="/Accommodations">
            <h4 className="text-3xl md:text-5xl text-backgroundwhite shadow-sm font-bold font-header border-b-4 border-second text-shadow-lg">
              HERE !
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
