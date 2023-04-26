import { Link } from 'react-router-dom';

const CardInspo = () => {
  return (
    <div className="flex flex-col mt-52 mx-auto max-w-7xl md:flex-row">
      <div className="rounded overflow-hidden shadow-lg mx-2 my-2 md:my-0 bg-lightgray md:max-w-lg">
        <img
          className="w-full object-cover"
          src="/herobanner-image.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            The amazing House with a roof
          </div>
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
            </svg>
            Top stay
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex justify-end">
          <Link to="/Accommodations">
            <div className=" text-second underline">
              <span className="mx-16 text-darkblue"> View more!</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-col justify-between">
        <div className="rounded overflow-hidden bg-lightgray my-4 md:my-0 shadow-lg mx-2 md:mb-6 flex flex-row md:h-60">
          <img
            className="w-full object-cover"
            src="/herobanner-image.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-2 md:px-6 py-4">
            <div className="font-bold text-md md:text-xl mb-2">
              The amazing House with a roof
            </div>
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
              </svg>
              Top stay
            </p>
            <p className="text-gray-700 text-sm md:text-base max-w-xs md:max-w-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="flex justify-end">
              <Link to="/Accommodations">
                <div className=" text-second underline">
                  <span className="mx-16 text-darkblue"> View more!</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden bg-lightgray my-4 md:my-0 shadow-lg mx-2 md:mt-6 flex flex-row md:h-60">
          <img
            className="w-full object-cover"
            src="/herobanner-image.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-2 md:px-6 py-4">
            <div className="font-bold text-md md:text-xl mb-2">
              The amazing House with a roof
            </div>
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
              </svg>
              Top stay
            </p>
            <p className="text-gray-700 text-sm md:text-base max-w-xs md:max-w-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="flex justify-end">
              <Link to="/Accommodations">
                <div className=" text-second underline">
                  <span className="mx-16 text-darkblue"> View more!</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInspo;
