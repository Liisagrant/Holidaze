import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../store/modules/VenuesSlice';
import HeadingHome from './HeadingHome';
import defaultTopRatedImage from '../../../public/defaultTopRated.jpg';

const TopRated = () => {
  const dispatch = useDispatch();
  const topRatedVenues = useSelector((state) =>
    state.Venues.topRatedHouses.slice(0)
  );

  const handleImageError = (e) => {
    e.target.src = defaultTopRatedImage;
  };

  useEffect(() => {
    dispatch(fetchVenues());
  }, [dispatch]);

  return (
    <div>
      <HeadingHome />
      {topRatedVenues.length >= 3 && (
        <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
          {topRatedVenues.slice(0, 3).map((venue) => (
            <div
              key={venue.id}
              className="max-w-sm bg-white border border-gray-100 rounded-lg shadow mx-2 my-2 md:my-0"
            >
              <Link to="#">
                <img
                  className="rounded-t-lg object-cover w-72 h-64"
                  src={venue.media ? venue.media : defaultTopRatedImage}
                  alt={venue.name}
                  onError={handleImageError}
                />
              </Link>
              <div className="relative">
                <svg
                  className="w-6 h-6 absolute top-0 right-0 mt-2 mr-2 text-second"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.888 5.834h6.154c.959 0 1.366 1.252.639 1.888l-4.962 3.617 1.888 5.834c.3.921-.755 1.658-1.508 1.114l-4.962-3.617-4.962 3.617c-.753.544-1.808-.193-1.508-1.114l1.888-5.834-4.962-3.617c-.727-.636-.32-1.888.639-1.888h6.154l1.888-5.834z" />
                </svg>
              </div>
              <div className="p-5 mt-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-darkblue">
                  {venue.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 max-w-[240px] h-16 overflow-hidden">
                  {venue.description}
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-main rounded-lg hover:bg-hovercolor"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRated;
