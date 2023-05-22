import { useSelector, useDispatch } from 'react-redux';
import { deleteVenue, REMOVE_VENUE } from '../../store/modules/VenuesSlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NoImage from '../../../public/NoImage.png';
import NoRentOuts from '../../../public/NoRentOuts.svg';

const RentOuts = () => {
  const dispatch = useDispatch();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const [localVenues, setLocalVenues] = useState(
    singleProfile ? singleProfile.venues : []
  );

  return (
    <div>
      <div className="relative">
        <div className="bg-lightgray p-4 mx-4 rounded-md flex flex-col">
          <p className="font-header text-lg text-darkblue font-bold text-center">
            Your Active RentOuts
          </p>
          {singleProfile &&
          singleProfile.venues &&
          localVenues &&
          localVenues.length > 0 ? (
            localVenues.map((venue) => (
              <div
                key={venue.id}
                className="bg-backgroundwhite p-1 flex flex-col md:flex-row my-2 rounded-md"
              >
                <div className="flex items-center justify-center h-30 w-full lg:h-full">
                  <img
                    className="rounded-md object-cover"
                    src={venue.media[0] || NoImage}
                    alt={venue.name}
                  />
                </div>
                <div className="mx-1 md:ml-2 mt-4">
                  <p className="font-header font-bold text-md px-2 max-w-ms">
                    {venue.name}
                  </p>
                  <div className="mx-auto shadow-md my-2 border-t border-main"></div>
                  <p className="font-header font-sm text-xs px-2 max-h-12 max-w-sm overflow-hidden">
                    {venue.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center sm:justify-around">
                    <div>
                      <Link to={`/Accommodation/${venue.id}`}>
                        <button
                          type="submit"
                          className="flex w-32 md:mx-2 font-header justify-center rounded-md bg-main hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm my-4"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link to={`/UpdateAccommodation/${venue.id}`}>
                        <button
                          type="submit"
                          className="flex w-32 md:mx-2 font-header justify-center rounded-md bg-green-500 hover:bg-green-700 px-2 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm my-4"
                        >
                          Update
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-32 md:mx-2 font-header justify-center rounded-md bg-red-500 hover:bg-red-700 px-2 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm my-4"
                        onClick={() => {
                          dispatch(deleteVenue(venue.id))
                            .then(() => {
                              setLocalVenues(
                                localVenues.filter((v) => v.id !== venue.id)
                              );
                              dispatch(removeVenue(venue.id));
                            })
                            .catch((error) => {});
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center p-8">
              <p className="font-paragraph font-md text-md">
                You have no Accommodation that is being rentet out{' '}
              </p>
              <div>
                <img
                  src={NoRentOuts}
                  alt="no rentouts. Man standign next to an empty shelf"
                />
              </div>
            </div>
          )}
        </div>
        <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">
          {singleProfile && singleProfile.venues
            ? singleProfile.venues.length
            : 0}
        </div>
      </div>
    </div>
  );
};

export default RentOuts;
