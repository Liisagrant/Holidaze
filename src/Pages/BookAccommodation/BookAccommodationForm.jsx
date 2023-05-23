import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import { bookVenue } from '../../store/modules/VenuesSlice';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import BookImage from '../../../public/BookImage.webp';
import success from '../../../public/success.svg';
import { useDispatch } from 'react-redux';
import { setLoadingState } from '../../store/modules/loaderSlice';
import SpinnerComponent from '../../Global/SpinnerComponent';
import CalendarComponent from './CalendarComponent';
import { format } from 'date-fns';

const validationSchema = Yup.object().shape({
  dateFrom: Yup.date().required('Required'),
  dateTo: Yup.date().required('Required'),
  guests: Yup.number().min(1, 'Must be at least 1 guest').required('Required'),
});

const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
  if (!dateFrom || !dateTo) {
    return 0;
  }

  const start = new Date(dateFrom);
  const end = new Date(dateTo);

  if (isNaN(start) || isNaN(end)) {
    return 0;
  }

  const timeDiff = Math.abs(end - start);
  const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const totalPrice = numberOfNights * pricePerNight;
  return totalPrice;
};

const BookAccommodationForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const { id } = useParams();

  const dateToYMD = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const formik = useFormik({
    initialValues: {
      dateFrom: '',
      dateTo: '',
      guests: '',
      venueId: id,
    },
    validationSchema,
    onSubmit: async (values) => {
      const bookingData = {
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
        guests: values.guests,
        venueId: values.venueId,
      };
      dispatch(setLoadingState(true));
      await dispatch(bookVenue(bookingData));
      dispatch(setLoadingState(false));
      setFormSubmitted(true);
      window.scrollTo(0, 0);
    },
  });

  useEffect(() => {
    dispatch(fetchSingleVenue(id));
  }, [dispatch, id]);

  const totalPrice = calculatePrice(
    formik.values.dateFrom,
    formik.values.dateTo,
    singleAccommodation.price
  );

  console.log(singleAccommodation.bookings);

  return (
    <div className="flex max-w-4xl mx-8 md:mx-auto bg-lightgray rounded-md">
      {formSubmitted ? (
        <div className="p-12 flex flex-col justify-center items-center">
          <p className="font-header text-3xl text-main">
            Your Booking was successfully made.
          </p>
          <p className="font-paragraph text-md text-gray-600 mt-6">
            You can see the accommodation{' '}
            <Link
              to={`/Accommodation/${singleAccommodation.id}`}
              className="font-bold text-xl text-main underline mx-1"
            >
              Accommodation!{' '}
            </Link>{' '}
          </p>
          <p className="font-paragraph text-md text-gray-600 mt-6">
            Or return to
            <Link
              to={`/Profile`}
              className="font-bold text-xl text-main underline mx-1"
            >
              Profile!{' '}
            </Link>
          </p>
          <p className="font-paragraph text-md text-gray-600 mt-6">
            or return to homepage
            <Link
              to={`/`}
              className="font-bold text-xl text-main underline mx-1"
            >
              Home!{' '}
            </Link>
          </p>
          <div className="max-w-md">
            <img alt="image of a happy man" src={success} />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex flex-col items-center">
              <svg
                width="150"
                height="50"
                viewBox="0 0 122 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0411 9.008V26H11.7131V19.376H6.64909V26H1.32109V9.008H6.64909V15.128H11.7131V9.008H17.0411ZM27.7183 26.168C26.1183 26.168 24.6463 25.792 23.3023 25.04C21.9743 24.288 20.9183 23.248 20.1343 21.92C19.3503 20.592 18.9583 19.096 18.9583 17.432C18.9583 15.768 19.3503 14.272 20.1343 12.944C20.9183 11.616 21.9743 10.584 23.3023 9.848C24.6463 9.096 26.1183 8.72 27.7183 8.72C29.3183 8.72 30.7823 9.096 32.1103 9.848C33.4383 10.584 34.4863 11.616 35.2543 12.944C36.0383 14.272 36.4303 15.768 36.4303 17.432C36.4303 19.096 36.0383 20.592 35.2543 21.92C34.4863 23.248 33.4303 24.288 32.0863 25.04C30.7583 25.792 29.3023 26.168 27.7183 26.168ZM27.7183 21.2C28.7743 21.2 29.5903 20.864 30.1663 20.192C30.7423 19.504 31.0303 18.584 31.0303 17.432C31.0303 16.264 30.7423 15.344 30.1663 14.672C29.5903 13.984 28.7743 13.64 27.7183 13.64C26.6463 13.64 25.8223 13.984 25.2463 14.672C24.6703 15.344 24.3823 16.264 24.3823 17.432C24.3823 18.584 24.6703 19.504 25.2463 20.192C25.8223 20.864 26.6463 21.2 27.7183 21.2ZM43.6803 21.968H48.8163V26H38.3523V9.008H43.6803V21.968ZM55.821 9.008V26H50.493V9.008H55.821ZM65.3073 9.008C67.0833 9.008 68.6353 9.368 69.9633 10.088C71.3073 10.808 72.3393 11.808 73.0593 13.088C73.7793 14.368 74.1393 15.824 74.1393 17.456C74.1393 19.072 73.7793 20.528 73.0593 21.824C72.3393 23.12 71.3073 24.144 69.9633 24.896C68.6353 25.632 67.0833 26 65.3073 26H58.2273V9.008H65.3073ZM64.8273 21.248C66.0273 21.248 66.9793 20.92 67.6833 20.264C68.3873 19.608 68.7393 18.672 68.7393 17.456C68.7393 16.24 68.3873 15.304 67.6833 14.648C66.9793 13.992 66.0273 13.664 64.8273 13.664H63.5553V21.248H64.8273ZM86.9593 23.432H81.2953L80.4553 26H74.8633L81.0793 9.008H87.2233L93.4153 26H87.7993L86.9593 23.432ZM85.6633 19.424L84.1273 14.696L82.5913 19.424H85.6633ZM100.53 21.752H107.346V26H94.6258V21.992L101.346 13.232H94.6258V9.008H107.346V13.016L100.53 21.752ZM115.071 13.256V15.344H120.351V19.352H115.071V21.752H121.071V26H109.743V9.008H121.071V13.256H115.071Z"
                  fill="#265399"
                />
              </svg>
              <h2 className="mt-4 text-2xl font-bold font-header leading-9 tracking-tight text-gray-900">
                Book this Accommodation
              </h2>
              <p className="mt-2 text-sm leading-6 font-paragraph text-gray-500">
                Just fill out this form{' '}
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form
                  onSubmit={formik.handleSubmit}
                  method="POST"
                  className="space-y-6"
                >
                  <div className="flex justify-center">
                    <CalendarComponent
                      formik={formik}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                      bookings={singleAccommodation.bookings || []}
                    />
                  </div>
                  <div className="flex flex-row justify-between">
                    <div>
                      <label
                        htmlFor="dateFrom"
                        className="block text-sm font-paragraph font-medium leading-6 text-gray-900"
                      >
                        Date From
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={formik.handleChange}
                          value={
                            formik.values.dateFrom
                              ? dateToYMD(formik.values.dateFrom)
                              : ''
                          }
                          id="dateFrom"
                          name="dateFrom"
                          required
                          className="block w-40 rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.dateFrom && formik.errors.dateFrom ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.dateFrom}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="dateTo"
                        className="block text-sm font-paragraph font-medium leading-6 text-gray-900"
                      >
                        Date To
                      </label>
                      <div className="mt-2">
                        <input
                          onChange={formik.handleChange}
                          value={
                            formik.values.dateTo
                              ? dateToYMD(formik.values.dateTo)
                              : ''
                          }
                          id="dateTo"
                          id="dateTo"
                          name="dateTo"
                          required
                          className="block w-40 rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.dateTo && formik.errors.dateTo ? (
                          <div className="text-red-600 text-sm">
                            {formik.errors.dateTo}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-paragraph font-medium leading-6 text-gray-900"
                    >
                      Number of Guests
                    </label>
                    <p className="text-sm font-paragraph font-medium leading-6 text-gray-700">
                      This accommodation only allows{' '}
                      <span className="text-red-700">
                        {singleAccommodation.maxGuests} guests
                      </span>
                      .
                    </p>

                    <div className="mt-2">
                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.guests}
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        required
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {formik.touched.guests && formik.errors.guests ? (
                        <div className="text-red-600 text-sm">
                          {formik.errors.guests}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="totalPrice"
                      className="block text-sm font-paragraph font-medium leading-6 text-gray-900"
                    >
                      Total Price
                    </label>
                    <div className="mt-2">
                      <input
                        id="totalPrice"
                        name="totalPrice"
                        type="text"
                        disabled
                        value={`$${totalPrice}`}
                        className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="flex w-full font-header justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book this Accommoadion
                      {isLoading ? <SpinnerComponent /> : null}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          src={BookImage}
          className="absolute inset-0 h-full w-96 object-cover rounded-tr-md rounded-br-md"
          alt="Image of a beach with lovely blue water"
        />
      </div>
    </div>
  );
};
export default BookAccommodationForm;
