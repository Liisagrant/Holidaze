import Home from '../../../public/home.svg';

const SellPoint = () => {
  return (
    <div className="my-40 h-full w-full bg-lightblue">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center md:flex-row">
        <div className="h-60">
          <img
            className="h-60"
            src={Home}
            alt="image of one excited about vactaion"
          />
        </div>
        <div className="m-4">
          <h5 className="text:lg mb-2 text-left font-header font-semibold leading-snug text-main">
            Find inspiration for your next trip.
          </h5>
          <p className="text-md mb-4 max-w-sm text-left font-paragraph text-gray-700">
            Explore a wide range of accommodations, including vacation homes,
            cabins, beach houses, apartments, and more to suit your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellPoint;
