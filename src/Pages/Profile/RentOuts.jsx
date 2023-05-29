import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteVenue, REMOVE_VENUE } from '../../store/modules/VenuesSlice';
import { Link } from 'react-router-dom';
import NoImage from '../../Image/NoImage.png';
import NoRentOuts from '../../Image/NoRentOuts.svg';

const RentOuts = () => {
  const dispatch = useDispatch();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const [localVenues, setLocalVenues] = useState(
    singleProfile ? singleProfile.venues : []
  );

  useEffect(() => {
    setLocalVenues(singleProfile ? singleProfile.venues : []);
  }, [singleProfile]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [venueToDelete, setVenueToDelete] = useState(null);

  return (
    <div>
      {isDeleteModalOpen && venueToDelete && (
        <div
          onClick={() => setIsDeleteModalOpen(false)}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-darkblue bg-opacity-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className=" relative max-h-screen overflow-auto rounded-md bg-lightgray px-12 py-16"
          >
            <button
              className="text-md absolute right-0 top-0 mx-4 my-2 text-gray-900"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              X
            </button>
            <p>
              Are you sure you want to delete the &apos;{venueToDelete.name}
              &apos; accommodation?
            </p>
            <div className="flex flex-row justify-center">
              <button
                type="submit"
                className="my-4 flex w-32 justify-center rounded-md bg-main px-2 py-1.5 font-header text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hovercolor md:mx-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="my-4 flex w-32 justify-center rounded-md bg-red-500 px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-700 md:mx-2"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(deleteVenue(venueToDelete.id))
                    .then(() => {
                      setLocalVenues(
                        localVenues.filter((v) => v.id !== venueToDelete.id)
                      );
                      dispatch(REMOVE_VENUE(venueToDelete.id));
                      setIsDeleteModalOpen(false);
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="relative">
        <div className="mx-4 flex flex-col rounded-md bg-lightgray p-4">
          <p className="text-center font-header text-lg font-bold text-darkblue">
            Your Active RentOuts
          </p>
          <div className="flex justify-end">
            <Link to={`/SeeRentoutBookings`}>
              <button
                type="submit"
                className="my-4 flex justify-center rounded-md bg-main px-2 py-1.5 font-header text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hovercolor md:mx-2"
              >
                See Bookings on your rentouts
              </button>
            </Link>
          </div>
          {singleProfile &&
          singleProfile.venues &&
          localVenues &&
          localVenues.length > 0 ? (
            localVenues.map((venue) => (
              <div
                key={venue.id}
                className="my-2 flex flex-col rounded-md bg-backgroundwhite p-1 md:flex-row"
              >
                <div className="h-30 flex w-full items-center justify-center lg:h-full">
                  <img
                    className="h-40 w-full rounded-md object-cover"
                    src={venue.media[0] || NoImage}
                    alt={venue.name}
                  />
                </div>
                <div className="mx-1 mt-4 md:ml-2">
                  <p className="text-md max-w-ms px-2 font-header font-bold">
                    {venue.name}
                  </p>
                  <div className="mx-auto my-2 border-t border-main shadow-md"></div>
                  <p className="font-sm max-h-12 max-w-lg overflow-hidden px-2 font-header text-xs">
                    {venue.description}
                  </p>
                  <div className="flex flex-col items-center sm:flex-row sm:justify-around">
                    <div>
                      <Link to={`/Accommodation/${venue.id}`}>
                        <button
                          type="submit"
                          className="my-4 flex w-32 justify-center rounded-md bg-main px-2 py-1.5 font-header text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hovercolor md:mx-2"
                        >
                          View
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link to={`/UpdateAccommodation/${venue.id}`}>
                        <button
                          type="submit"
                          className="my-4 flex w-32 justify-center rounded-md bg-green-500 px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:bg-green-700 md:mx-2"
                        >
                          Update
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="my-4 flex w-32 justify-center rounded-md bg-red-500 px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:bg-red-700 md:mx-2"
                        onClick={() => {
                          setIsDeleteModalOpen(true);
                          setVenueToDelete(venue);
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
            <div className="flex flex-col items-center justify-center p-8">
              <p className="font-md text-md font-paragraph">
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
        <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
          {singleProfile && singleProfile.venues
            ? singleProfile.venues.length
            : 0}
        </div>
      </div>
    </div>
  );
};

export default RentOuts;
