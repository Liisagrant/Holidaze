import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../store/modules/VenuesSlice';
import HeadingHome from './HeadingHome';

const CardInspo = () => {
  const dispatch = useDispatch();
  const topRatedVenues = useSelector((state) =>
    state.Venues.topRatedHouses.slice(3)
  );

  useEffect(() => {
    dispatch(fetchVenues());
  }, [dispatch]);

  return (
    <div>
      <HeadingHome />
      {topRatedVenues.length > 0 && (
        <div className="flex flex-col mx-auto max-w-7xl md:flex-row">
          <div className="rounded overflow-hidden shadow-lg mx-2 my-2 md:my-0 bg-lightgray md:max-w-lg">
            <img
              className="w-full object-cover"
              src={topRatedVenues[0].media}
              alt={topRatedVenues[0].name}
            />
            <div className="px-6 py-4">
              <div className="font-bold font-header text-xl mb-2">
                {topRatedVenues[0].name}
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
              <p className="text-gray-700 text-sm md:text-base font-paragraph">
                {topRatedVenues[0].description}
              </p>
            </div>
            <div className="flex justify-end">
              <Link to="/Accommodations">
                <div className=" text-second underline">
                  <span className="mx-16 text-darkblue font-header font-bold">
                    {' '}
                    View more!
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-col justify-between">
            <div className="rounded overflow-hidden bg-lightgray my-4 md:my-0 shadow-lg mx-2 md:mb-6 flex flex-row md:h-60">
              <img
                className="w-full object-cover"
                src={topRatedVenues[1].media}
                alt={topRatedVenues[1].name}
              />
              <div className="px-2 md:px-6 py-4">
                <div className="font-bold text-md md:text-xl mb-2 font-header">
                  {topRatedVenues[1].name}
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
                <p className="text-gray-700 text-sm md:text-base max-w-xs md:max-w-none font-paragraph">
                  {topRatedVenues[0].description}
                </p>
                <div className="flex justify-end">
                  <Link to="/Accommodations">
                    <div className=" text-second underline">
                      <span className="mx-16 text-darkblue font-header font-bold">
                        {' '}
                        View more!
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden bg-lightgray my-4 md:my-0 shadow-lg mx-2 md:mt-6 flex flex-row md:h-60">
              <img
                className="w-full object-cover"
                src={topRatedVenues[0].media}
                alt={topRatedVenues[0].name}
              />
              <div className="px-2 md:px-6 py-4">
                <div className="font-bold text-md md:text-xl mb-2 font-header">
                  {topRatedVenues[0].name}
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
                <p className="text-gray-700 font-paragraph text-sm md:text-base max-w-xs md:max-w-none">
                  {topRatedVenues[0].description}
                </p>
                <div className="flex justify-end">
                  <Link to="/Accommodations">
                    <div className=" text-second underline">
                      <span className="mx-16 text-darkblue font-paragraph font-bold ">
                        {' '}
                        View more!
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  //   <div>
  //     <HeadingHome />
  //     <div className="flex flex-col mx-auto max-w-7xl md:flex-row">
  //       {topRatedVenues.map((venue) => (
  //         <div
  //           key={venue.id}
  //           className="rounded overflow-hidden shadow-lg mx-2 my-2 md:my-0 bg-lightgray md:max-w-lg"
  //         >
  //           <img
  //             className="w-full object-cover"
  //             src={venue.media}
  //             alt={venue.name}
  //           />
  //           <div className="px-6 py-4">
  //             <div className="font-bold font-header text-xl mb-2">
  //               {venue.name}
  //             </div>
  //             <p className="text-sm text-gray-600 flex items-center">
  //               <svg
  //                 className="fill-current text-gray-500 w-3 h-3 mr-2"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 20 20"
  //               >
  //                 <path d="M10 15.27L16.18 21l-1.64-7.03L22 9.24l-7.19-.61L10 2 7.19 8.63 0 9.24l5.46 4.73L3.82 21z" />
  //               </svg>
  //               Top stay
  //             </p>
  //             <p className="text-gray-700 text-sm md:text-base font-paragraph">
  //               {venue.description}
  //             </p>
  //           </div>
  //           <div className="flex justify-end">
  //             <Link to={`/venues/${venue.id}`}>
  //               <div className=" text-second underline">
  //                 <span className="mx-16 text-darkblue font-header font-bold">
  //                   {' '}
  //                   View more!
  //                 </span>
  //               </div>
  //             </Link>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default CardInspo;
