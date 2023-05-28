import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVenue } from '../../../store/modules/VenuesSlice';
import { ADD_VENUE_TO_PROFILE } from '../../../store/modules/ProfileSlice';
import secondHelper from '../../../../public/secondHelper.svg';
import AddMediaToAccommodation from './AddMediaToAccommodation';
import AddMetaToAccommodations from './AddMetaToAccommodations';
import AddInfoAccommodation from './AddInfoAccommodation';
import { setLoadingState } from '../../../store/modules/loaderSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddAccommodationForm = () => {
  const dispatch = useDispatch();
  const [mediaArray, setMediaArray] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [amenities, setAmenities] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(8, 'Must be 8 chars or more')
      .max(60, 'Can not be longer than 50 chars')
      .required('Required'),
    description: Yup.string()
      .min(20, 'Must be 20 chars or more')
      .max(1000, 'Can not be longer than 1000 chars')
      .required('Required'),
    media: Yup.string()
      .url('Invalid URL')
      .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL'),
    price: Yup.number().required('Required'),
    maxGuests: Yup.number().required('Required'),
    country: Yup.string()
      .min(1, 'Must be 1 chars or more')
      .max(60, 'Can not be longer than 60 chars')
      .required('Required'),
    continent: Yup.string()
      .min(1, 'Must be 1 chars or more')
      .max(60, 'Can not be longer than 60 chars')
      .required('Required'),
    city: Yup.string()
      .min(1, 'Must be 1 chars or more')
      .max(60, 'Can not be longer than 60 chars')
      .required('Required'),
    address: Yup.string()
      .min(1, 'Must be 1 chars or more')
      .max(60, 'Can not be longer than 60 chars')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      media: [],
      price: 1,
      maxGuests: 1,
      meta: {
        wifi: amenities.wifi,
        parking: amenities.parking,
        breakfast: amenities.breakfast,
        pets: amenities.pets,
      },
      location: {
        address: '',
        city: '',
        zip: '',
        country: '',
        continent: '',
        lat: 0,
        lng: 0,
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const venueData = {
        name: values.name,
        description: values.description,
        media: mediaArray,
        price: values.price,
        maxGuests: values.maxGuests,
        rating: 5,
        meta: {
          wifi: values.meta.wifi,
          parking: values.meta.parking,
          breakfast: values.meta.breakfast,
          pets: values.meta.pets,
        },
        location: {
          address: values.address,
          city: values.city,
          zip: values.zip,
          country: values.country,
          continent: values.continent,
          lat: 0,
          lng: 0,
        },
      };
      dispatch(setLoadingState(true));
      dispatch(createVenue(venueData))
        .then((newVenue) => {
          setFormSubmitted(true);
          dispatch(setLoadingState(false));
          window.scrollTo(0, 0);
          dispatch(ADD_VENUE_TO_PROFILE(newVenue));
        })
        .catch((error) => {
          dispatch(setLoadingState(false));
        });
    },
  });

  return (
    <div className="mx-4 flex max-w-7xl justify-center rounded-md bg-lightgray px-2 md:mx-auto lg:px-24">
      {formSubmitted ? (
        <div className="flex flex-col items-center justify-center p-12">
          <p className="font-header text-3xl text-main">
            Your accommodation has been successfully added!
          </p>
          <p className="text-md font-paragraph text-gray-600">
            added and is now available for rent. To view your listing, please
            navigate to the &apos;RentOuts&apos; section under the profile menu.
            We hope it will be rented out soon!
          </p>
          <div className="max-w-md">
            <img src={secondHelper} alt="image of a happy man" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center py-8 sm:px-6 lg:flex-none">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-4">
              <div>
                <form onSubmit={formik.handleSubmit} className="w-full">
                  <AddInfoAccommodation formik={formik} />
                  <AddMediaToAccommodation
                    formik={formik}
                    mediaArray={mediaArray}
                    setMediaArray={setMediaArray}
                  />
                  <AddMetaToAccommodations
                    amenities={amenities}
                    setAmenities={setAmenities}
                    formik={formik}
                  />

                  <div className="my-8 flex justify-center">
                    <button
                      type="submit"
                      className="rounded-md bg-main px-4 py-2 font-semibold text-white hover:bg-hovercolor"
                    >
                      Add Accommodation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAccommodationForm;
