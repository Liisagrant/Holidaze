import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../store/modules/VenuesSlice';
import HeadingHome from './HeadingHome';
import defaultTopRatedImage from '../../../public/defaultTopRated.jpg';
import RatingStar from '../../Global/RatingStar';

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
              className="max-w-xs bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden mx-2 my-2 md:my-0 transition-transform transform hover:scale-105"
            >
              <Link to={`/Accommodation/${venue.id}`}>
                <img
                  className="w-full h-64 object-cover"
                  src={venue.media ? venue.media : defaultTopRatedImage}
                  alt={venue.name}
                  onError={handleImageError}
                />
              </Link>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-darkblue">
                  {venue.name}
                </div>
                <RatingStar venue={venue} />
                <div className="my-4">
                  <Link
                    to={`/Accommodation/${venue.id}`}
                    className="inline-flex items-center justify-center px-3 py-2 bg-main text-white text-sm font-medium rounded-lg hover:bg-hovercolor w-full"
                  >
                    View
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRated;
