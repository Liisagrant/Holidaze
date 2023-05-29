import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../store/modules/VenuesSlice';
import HeadingHome from './HeadingHome';
import defaultTopRatedImage from '../../Image/defaultTopRated.jpg';
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
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center">
          {topRatedVenues.slice(0, 3).map((venue) => (
            <div
              key={venue.id}
              className="mx-2 my-2 max-w-xs transform overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg transition-transform hover:scale-105 md:my-0"
            >
              <Link to={`/Accommodation/${venue.id}`}>
                <img
                  className="h-64 w-full object-cover"
                  src={venue.media ? venue.media : defaultTopRatedImage}
                  alt={venue.name}
                  onError={handleImageError}
                />
              </Link>
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold text-darkblue">
                  {venue.name}
                </div>
                <RatingStar venue={venue} />
                <div className="my-4">
                  <Link
                    to={`/Accommodation/${venue.id}`}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-main px-3 py-2 text-sm font-medium text-white hover:bg-hovercolor"
                  >
                    View
                    <svg
                      aria-hidden="true"
                      className="-mr-1 ml-2 h-4 w-4"
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
