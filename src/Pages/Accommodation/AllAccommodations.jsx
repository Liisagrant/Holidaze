import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchVenues, fetchSingleVenue } from '../../store/modules/VenuesSlice';
import NoSearch from '../../../public/NoSearch.svg';
import NoImage from '../../../public/NoImage.png';
import RatingStar from '../../Global/RatingStar';
import { setLoadingState } from '../../store/modules/loaderSlice';
import SpinnerComponent from '../Global/SpinnerComponent';

const AllAccommodations = () => {
  const dispatch = useDispatch();
  const venues = useSelector((state) => state.Venues.venues);
  const searchQuery = useSelector((state) => state.Venues.search);

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageError = (e) => {
    e.target.src = NoImage;
  };

  useEffect(() => {
    dispatch(setLoadingState(true));
    dispatch(fetchVenues());
    dispatch(fetchSingleVenue('venueId'));
    dispatch(setLoadingState(false));
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <SpinnerComponent />
      </div>
    );
  }

  return (
    <div className="md:ml-4 lg:mr-8 xl:mr-2 flex flex-col max-w-7xl ">
      {filteredVenues.length === 0 && (
        <div className="mx-8 md:mx-auto flex flex-col justify-center">
          <p className="font-header text-4xl lg:text-5xl text-bold text-main text-shadow-md">
            No accommodations match your search
          </p>
          <img
            src={NoSearch}
            alt="No search matches"
            className="h-60 lg:h-96"
          />
        </div>
      )}
      {filteredVenues.map((venue) => (
        <div
          key={venue.id}
          className="bg-backgroundwhite border-lightgray border-2 shadow-md mb-4 mx-4 md:mx-auto rounded-md lg:w-[900px]"
        >
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                className="h-80 w-full lg:w-96 object-cover sm:rounded-t-md md:rounded-l-md md:rounded-tr-none "
                src={venue.media.length > 0 ? venue.media[0] : NoImage}
                alt={venue.name}
                onError={handleImageError}
              />
            </div>
            <div className="md:ml-8 w-full">
              <h2 className="ml-2 md:ml-none my-4 max-w-md text-2xl font-header font-bold tracking-tight text-darkblue overflow-hidden">
                {venue.name}
              </h2>
              <div className="px-2">
                <RatingStar venue={venue} />
              </div>
              <div className="flex items-center mb-2">
                <span className=" ml-2 md:ml-none font-medium text-gray-600 mr-2">
                  Price:
                </span>
                <span className=" ml-2 md:ml-none font-semibold text-darkblue">
                  {venue.price} $
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className=" ml-2 md:ml-none font-medium text-gray-600 mr-2">
                  Max Guests:
                </span>
                <span className=" ml-2 md:ml-none font-semibold text-darkblue">
                  {venue.maxGuests} people
                </span>
              </div>
              <div class="mx-auto shadow-md w-60 md:w-96 md:mx-0 mt-4 border-t border-main"></div>
              <p className="ml-2 md:ml-none font-paragraph text-sm pt-6 pr-2 max-w-xs lg:max-w-lg max-h-20 overflow-hidden">
                {venue.description}
              </p>
              <div className="flex lg:justify-end">
                <Link to={`/Accommodation/${venue.id}`}>
                  <button
                    type="button"
                    className="my-6 w-60 mx-8 rounded-md bg-main px-3 py-2 text-sm font-semibold font-header text-backgroundwhite shadow hover:bg-hovercolor"
                  >
                    View more!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAccommodations;
