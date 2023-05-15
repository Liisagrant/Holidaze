import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NoRentOuts from '../../../public/NoRentOuts.svg';

const UserBookings = () => {
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  console.log(singleProfile);
  const numVenues = singleProfile ? singleProfile.venues.length : 0;

  return (
    <div className="relative">
      <div className="bg-lightgray p-4 mx-4 my-4 rounded-md flex flex-col">
        <p className="font-header text-lg text-darkblue font-bold">
          Scheduled Bookings
        </p>
        {singleProfile &&
        singleProfile.bookings &&
        singleProfile.bookings.length > 0 ? (
          singleProfile.bookings.map((booking) => (
            <div className="bg-backgroundwhite p-2 flex flex-col md:flex-row my-2 rounded-md">
              <div className="flex items-center justify-center md:h-40 md:w-40">
                <img
                  className="rounded-md object-cover h-60 w-full md:h-full md:w-auto"
                  src={booking.venue.media[0] || NoImage}
                  alt={booking.venue.name}
                />
              </div>
              <div className="md:w-96 lg:w-60 flex flex-col">
                <p className="font-header text-center md:text-left font-bold text-md px-2 mt-4">
                  {booking.venue.name}
                </p>
                <div className="mx-auto shadow-md w-40 md:w-60 my-4 border-t border-main"></div>
                <p className="font-paragraph text-sm px-2 my-2">
                  Booked from: {new Date(booking.dateFrom).toLocaleDateString()}
                </p>
                <p className="font-paragraph text-sm px-2 my-2">
                  To: {new Date(booking.dateTo).toLocaleDateString()}
                </p>
                <p className="font-paragraph text-sm px-2 my-2">
                  Guests: {booking.guests}
                </p>
              </div>
              <div className="flex justify-center md:items-end">
                <Link to={`/Accommodation/${booking.venue.id}`}>
                  <button
                    type="submit"
                    className="flex w-32 md:mx-auto font-header justify-center rounded-md bg-main hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm my-4"
                  >
                    View
                  </button>
                </Link>
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
        {numVenues}
      </div>
    </div>
  );
};

export default UserBookings;
