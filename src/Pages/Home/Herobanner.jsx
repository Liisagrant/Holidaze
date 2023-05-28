import { Link } from 'react-router-dom';
import HerobannerImage from '../../../public/HerobannerImage.webp';

const Herobanner = () => {
  return (
    <div className="relative mt-10">
      <div className="h-[]">
        <img
          src={HerobannerImage}
          alt="Background image"
          className="h-96 w-full object-cover md:h-[700px]"
        />
      </div>
      <div className="xs:bottom-[-10px] absolute bottom-[65px] mx-14 max-w-7xl rounded-md bg-main bg-opacity-60 px-4 py-8 sm:bottom-[-140px] md:bottom-[280px] md:left-2 lg:left-32">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-header text-3xl font-bold text-[#FBF9F6] text-shadow-lg md:text-5xl">
            TRAVEL AND RELAX
          </h1>
          <hr className="h-px w-[200px] border-0 bg-[#FF9F1C]"></hr>
          <p className="font-header text-sm text-[#FBF9F6] md:w-[425px]">
            Why stay at hotels when you can just rent a home? Just kick back and
            relax. Enjoy the atmosphere without all the noise.
          </p>
          <Link to="/Accommodations">
            <h4 className="rounded-md bg-[#FF9F1C] px-10 py-2 font-header text-base font-bold text-[#FBF9F6]">
              VIEW
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
