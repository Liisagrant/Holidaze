import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NoRentOuts from '../../Image/NoRentOuts.svg';
import NoImage from '../../Image/NoImage.png';

const UserBookings = () => {
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const numVenues = singleProfile ? singleProfile.bookings.length : 0;

  return (
    <div className="relative">
      <div className="mx-4 my-4 flex flex-col rounded-md bg-lightgray p-4">
        <p className="font-header text-lg font-bold text-darkblue">
          Scheduled Bookings
        </p>
        {singleProfile &&
        singleProfile.bookings &&
        singleProfile.bookings.length > 0 ? (
          singleProfile.bookings.map((booking) => (
            <div
              className="my-2 flex flex-col rounded-md bg-backgroundwhite p-2 md:flex-row"
              key={booking.venue.id}
            >
              <div className="flex items-center justify-center md:h-40 md:w-40">
                <img
                  className="h-60 w-full rounded-md object-cover md:h-full md:w-auto"
                  src={booking.venue.media[0] || NoImage}
                  alt={booking.venue.name}
                />
              </div>
              <div className="flex flex-col md:w-96 lg:w-60">
                <p className="text-md mt-4 px-2 text-center font-header font-bold md:text-left">
                  {booking.venue.name}
                </p>
                <div className="mx-auto my-4 w-40 border-t border-main shadow-md md:w-60"></div>
                <p className="my-2 px-2 font-paragraph text-sm">
                  Booked from: {new Date(booking.dateFrom).toLocaleDateString()}
                </p>
                <p className="my-2 px-2 font-paragraph text-sm">
                  To: {new Date(booking.dateTo).toLocaleDateString()}
                </p>
                <p className="my-2 px-2 font-paragraph text-sm">
                  Guests: {booking.guests}
                </p>
              </div>
              <div className="flex justify-center md:items-end">
                <Link to={`/Accommodation/${booking.venue.id}`}>
                  <button
                    type="submit"
                    className="my-4 flex w-32 justify-center rounded-md bg-main px-2 py-1.5 font-header text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hovercolor md:mx-auto"
                  >
                    View
                  </button>
                </Link>
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
        {numVenues}
      </div>
    </div>
  );
};

export default UserBookings;
