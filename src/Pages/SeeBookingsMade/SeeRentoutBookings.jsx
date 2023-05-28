import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserDetails } from '../../utils/Auth';
import formatDate from '../../Global/formatDate';
import { fetchBookingOwner } from '../../store/modules/ProfileSlice';
import SpinnerComponent from '../../Global/SpinnerComponent';

const SeeRentoutBookings = () => {
  const dispatch = useDispatch();
  // let { id } = useParams();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const userDetails = getUserDetails();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetails.username) {
      setLoading(true);

      dispatch(fetchBookingOwner(userDetails.username)).finally(() => {
        setLoading(false);
      });
    }
  }, [dispatch, userDetails.username]);

  const truncateText = (text, maxWords) => {
    const words = text.split(' ');

    if (words.length <= maxWords) {
      return text;
    }

    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ') + '...';
  };

  const sortBookingsByDate = (bookings) => {
    return bookings
      .slice()
      .sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
  };

  return (
    <div className="max-w-7xl mt-40">
      <div className="my-2 flex gap-5 justify-center ">
        <div className="w-full mx-4 max-w-4xl rounded-md bg-lightgray shadow-md sm:p-2 py-4 md:p-16">
          <h1 className="pb-5 px-4 font-heading text-xl md:text-4xl font-bold">
            Bookings on your Accommodation
          </h1>
          {loading ? (
            <SpinnerComponent />
          ) : (
            <>
              {singleProfile && singleProfile.length > 0 ? (
                singleProfile.map((booking) => {
                  const { id, name, media, bookings } = booking;
                  const venuesWithBookings = bookings.length > 0;
                  const truncatedName = truncateText(name, 4);

                  if (!venuesWithBookings) {
                    return null;
                  }

                  const sortedBookings = sortBookingsByDate(bookings);

                  return (
                    <div key={id} className="my-4 mx-4">
                      <h2 className="font-heading text-1xl font-semibold">
                        {truncatedName}
                      </h2>
                      <table className="w-full text-center text-sm text-black my-4">
                        <thead className="bg-lightgrey text-xs uppercase text-black">
                          <tr>
                            <th scope="col" className="py-3 md:px-6"></th>
                            <th scope="col" className="px-1 py-3 lg:px-6">
                              Guests
                            </th>
                            <th scope="col" className="px-1 py-3 lg:px-6">
                              To - From
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedBookings.map((bookingItem) => (
                            <tr
                              key={bookingItem.id}
                              className="my-2  rounded-md border-b bg-backgroundwhite font-body text-sm font-light text-black"
                            >
                              <th className="h-24 w-24">
                                <img
                                  className="h-full w-full object-cover rounded-md"
                                  src={media[0] ? media[0] : DefaultHouse}
                                  alt={truncatedName}
                                />
                              </th>
                              <td className="px-1 py-4 lg:px-6">
                                {bookingItem.guests}
                              </td>
                              <td className="px-1 py-4 lg:px-6">
                                {formatDate(
                                  bookingItem.dateTo,
                                  'day-month-year'
                                )}{' '}
                                -{' '}
                                {formatDate(
                                  bookingItem.dateFrom,
                                  'day-month-year'
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-white p-8 drop-shadow-md">
                  <h1 className="font-paragraph font-md w-full py-10 text-center font-heading text-xl font-bold">
                    Sorry, you have no bookings right now{' '}
                  </h1>
                  <Link to="/Profile">
                    <button className="rounded-md bg-blue px-5 py-2 font-body text-white">
                      Return to Profile
                    </button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeRentoutBookings;
