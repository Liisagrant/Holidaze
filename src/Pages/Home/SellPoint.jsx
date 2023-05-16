import { Link } from 'react-router-dom';
import Home from '../../../public/home.svg';

const SellPoint = () => {
  return (
    <div className="bg-lightblue h-full w-full my-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="h-60">
          <img
            className="h-60"
            src={Home}
            alt="image of one excited about vactaion"
          />
        </div>
        <div className="m-4">
          <h5 className="mb-2 text:lg font-header font-semibold leading-snug text-main text-left">
            Find inspiration for your next trip.
          </h5>
          <p className="mb-4 text-md text-gray-700 text-left font-paragraph max-w-sm">
            Explore a wide range of accommodations, including vacation homes,
            cabins, beach houses, apartments, and more to suit your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellPoint;
