import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserDetails } from '../../utils/Auth';
import formatDate from '../../Global/formatDate';
import { fetchBookingOwner } from '../../store/modules/ProfileSlice';
import SpinnerComponent from '../../Global/SpinnerComponent';
import BreadCrumbs from '../../Global/BreadCrumbs';
import NoImage from '../../Image/NoImage.png';
import NoRentOutSvgs from '../../Image/NoRentOuts.svg';

const SeeRentoutBookings = () => {
  const dispatch = useDispatch();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const userDetails = getUserDetails();
  const [loading, setLoading] = useState(true);

  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/Profile' },
    { name: 'Bookings on RentOuts', path: `/SeeRentoutBookings` },
  ];

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
    <div className="mt-40 max-w-7xl">
      <BreadCrumbs breadcrumb={breadcrumb} />
      <div className="my-2 flex justify-center gap-5 ">
        <div className="mx-4 w-full max-w-4xl rounded-md bg-lightgray py-4 shadow-md sm:p-2 md:p-16">
          <h1 className="font-heading px-4 pb-5 text-xl font-bold md:text-4xl">
            Bookings on your Accommodation
          </h1>
          {loading ? (
            <SpinnerComponent />
          ) : (
            <>
              {singleProfile.some((profile) => profile.bookings.length > 0) ? (
                singleProfile.map((booking) => {
                  const { id, name, media, bookings } = booking;
                  const venuesWithBookings = bookings.length > 0;
                  const truncatedName = truncateText(name, 4);

                  if (!venuesWithBookings) {
                    return null;
                  }

                  const sortedBookings = sortBookingsByDate(bookings);

                  return (
                    <div key={id} className="mx-4 my-4">
                      <h2 className="font-heading text-1xl font-semibold">
                        {truncatedName}
                      </h2>
                      <table className="my-4 w-full text-center text-sm text-black">
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
                              className="font-body my-2 rounded-md border-b bg-backgroundwhite text-sm font-light text-black"
                            >
                              <th className="h-24 w-24">
                                <img
                                  className="h-full w-full rounded-md object-cover"
                                  src={media[0] ? media[0] : NoImage}
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
                <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-white p-4 drop-shadow-md">
                  <h1 className="font-md font-heading w-full py-10 text-center font-paragraph text-xl font-bold">
                    Sorry, you have no bookings right now
                  </h1>
                  <Link to="/Profile">
                    <button className="bg-blue rounded-md px-5 py-2 font-paragraph text-main">
                      Return to Profile
                    </button>
                  </Link>
                  <img src={NoRentOutSvgs} />
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
