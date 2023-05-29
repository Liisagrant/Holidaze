import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchVenues, fetchSingleVenue } from '../../store/modules/VenuesSlice';
import NoSearch from '../../Image/NoSearch.svg';
import NoImage from '../../Image/NoImage.png';
import RatingStar from '../../Global/RatingStar';
import { setLoadingState } from '../../store/modules/loaderSlice';
import ErrorComponent from '../../Global/ErrorComponent';

const AllAccommodations = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.error.isError);
  const venues = useSelector((state) => state.Venues.venues);
  const searchQuery = useSelector((state) => state.Venues.search);
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const displayedVenues = filteredVenues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleImageError = (e) => {
    e.target.src = NoImage;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoadingState(true));
        await dispatch(fetchVenues());
        await dispatch(fetchSingleVenue('venueId'));
        dispatch(setLoadingState(false));
      } catch (error) {
        console.error('An error occurred: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="flex max-w-7xl flex-col md:ml-4 lg:mr-8 xl:mr-2">
      {venues.length > 0 && displayedVenues.length === 0 && (
        <div className="mx-8 flex flex-col justify-center md:mx-auto">
          <p className="text-bold font-header text-4xl text-main text-shadow-md lg:text-5xl">
            No accommodations match your search
          </p>
          <img
            src={NoSearch}
            alt="No search matches"
            className="h-60 lg:h-96"
          />
        </div>
      )}
      {isError && <ErrorComponent />}
      {displayedVenues.map((venue) => (
        <div
          key={venue.id}
          className="mx-4 mb-4 rounded-md border-2 border-lightgray bg-backgroundwhite shadow-md md:mx-auto lg:w-[900px]"
        >
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                className="h-80 w-full object-cover sm:rounded-t-md md:w-80 md:rounded-l-md md:rounded-tr-none lg:w-96 "
                src={venue.media.length > 0 ? venue.media[0] : NoImage}
                alt="Image of the Accommodation"
                onError={handleImageError}
              />
            </div>
            <div className="flex w-full flex-col items-center md:ml-8 md:items-start">
              <h2 className="md:ml-none my-4 ml-2 max-h-16 max-w-md overflow-hidden font-header text-2xl font-bold tracking-tight text-darkblue">
                {venue.name}
              </h2>
              <div className="px-2">
                <RatingStar venue={venue} />
              </div>
              <div className="mb-2 flex items-center">
                <span className=" md:ml-none ml-2 mr-2 font-medium text-gray-600">
                  Price:
                </span>
                <span className=" md:ml-none ml-2 font-semibold text-darkblue">
                  {venue.price} $
                </span>
              </div>
              <div className="mb-2 flex items-center">
                <span className=" md:ml-none ml-2 mr-2 font-medium text-gray-600">
                  Max Guests:
                </span>
                <span className=" md:ml-none ml-2 font-semibold text-darkblue">
                  {venue.maxGuests} people
                </span>
              </div>
              <div className="mx-auto mt-4 w-60 border-t border-main shadow-md md:mx-0 md:w-96"></div>
              <p className="md:ml-none ml-2 max-h-10 max-w-xs overflow-hidden pr-2 pt-6 font-paragraph text-sm lg:max-w-lg">
                {venue.description}
              </p>
              <div className="flex lg:justify-end">
                <Link to={`/Accommodation/${venue.id}`}>
                  <button
                    type="button"
                    className="mx-8 my-6 w-60 rounded-md bg-main px-3 py-2 font-header text-sm font-semibold text-backgroundwhite shadow hover:bg-hovercolor"
                  >
                    View more!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mx-auto flex max-w-3xl flex-row">
        {currentPage > 1 && (
          <button
            className="mx-4 w-full rounded bg-main px-4 py-2 font-bold text-white hover:bg-hovercolor"
            onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        )}
        {currentPage < Math.ceil(filteredVenues.length / itemsPerPage) && (
          <button
            className="mx-4 w-full rounded bg-main px-4 py-2 font-bold text-white hover:bg-hovercolor"
            onClick={() =>
              setCurrentPage((old) =>
                Math.min(
                  old + 1,
                  Math.ceil(filteredVenues.length / itemsPerPage)
                )
              )
            }
            disabled={
              currentPage === Math.ceil(filteredVenues.length / itemsPerPage)
            }
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllAccommodations;
