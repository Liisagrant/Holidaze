import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVenues, fetchSingleVenue } from '../../store/modules/VenuesSlice';
import Amenities from './Amenites';
import NoSearch from '../../../public/NoSearch.svg';

const AllAccommodations = () => {
  const dispatch = useDispatch();
  const venues = useSelector((state) => state.Venues.venues);
  const searchQuery = useSelector((state) => state.Venues.search);

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchVenues());
    dispatch(fetchSingleVenue('venueId'));
  }, [dispatch]);

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
          className="bg-lightgray mb-4 sx:mx-4 mx-auto rounded-md lg:w-full"
        >
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                className="h-80 w-80 lg:w-96 object-cover sm:rounded-t-md md:rounded-l-md md:rounded-tr-none "
                src={venue.media.length > 0 ? venue.media[0] : '/NoImage.png'}
                alt={venue.name}
              />
            </div>
            <div className="lg:ml-12">
              <h2 className="text-1xl font-header text-darkblue font-bold p-2">
                {venue.name}
              </h2>
              <Amenities
                wifi={venue.meta.wifi}
                parking={venue.meta.parking}
                pets={venue.meta.pets}
                breakfast={venue.meta.breakfast}
              />
              <p className="font-header text-md font-bold px-2">
                Price: {venue.price} kr
              </p>
              <p className="font-header text-md font-bold px-2">
                Max guests: {venue.maxGuests}
              </p>
              <p className="font-paragraph text-sm pt-6 px-2 max-w-xs lg:max-w-lg max-h-20 overflow-hidden">
                {venue.description}
              </p>
              <div className="flex lg:justify-end">
                <Link to={`/Accommodation/${venue.id}`}>
                  <button
                    type="button"
                    className="m-8 w-60 mx-10 rounded-md bg-main px-3 py-2 text-sm font-semibold font-header text-backgroundwhite shadow hover:bg-hovercolor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
