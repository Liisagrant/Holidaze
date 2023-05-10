import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NoImage from '../../../public/NoImage.png';
import NoRentOuts from '../../../public/NoRentOuts.svg';

const RentOuts = () => {
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  console.log(singleProfile);
  const numVenues = singleProfile ? singleProfile.venues.length : 0;

  return (
    <div className="relative">
      <div className="bg-lightgray p-4 mx-4 rounded-md flex flex-col">
        <p className="font-header text-lg text-darkblue font-bold text-center">
          Your Active RentOuts
        </p>
        {singleProfile &&
        singleProfile.venues &&
        singleProfile.venues.length > 0 ? (
          singleProfile.venues.map((venue) => (
            <Link to={`/Accommodation/${venue.id}`}>
              <div
                key={venue.id}
                className="bg-backgroundwhite p-1 flex flex-row my-2 rounded-md"
              >
                <div className="flex items-center h-40 w-40">
                  <img
                    className="rounded-md object-cover h-40"
                    src={venue.media[0] || NoImage}
                    alt={venue.name}
                  />
                </div>
                <div className="ml-8 mt-4">
                  <p className="font-header font-bold text-md px-2">
                    {venue.name}
                  </p>
                  <div className="mx-auto shadow-md my-2 border-t border-main"></div>
                  <p className="font-header font-sm text-xs px-2 max-h-12 max-w-md overflow-hidden">
                    {venue.description}
                  </p>
                  <div className="flex flex-row">
                    <button
                      type="submit"
                      className="flex w-32 md:mx-auto font-header justify-center rounded-md bg-green-500 hover:bg-green-600 px-2 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm my-4"
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      className="flex w-32 md:mx-auto font-header justify-center rounded-md bg-red-500 hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm my-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Link>
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
  );
};

export default RentOuts;
