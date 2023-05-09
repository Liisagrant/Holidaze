import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVenue } from '../../store/modules/VenuesSlice';
// import AddMediaToAccommodation from './AddMediaToAccommodation';
import AddMetaToAccommodations from './AddMetaToAccommodations';
import AddInfoAccommodation from './AddInfoAccommodation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(8, 'Must be 8 chars or more')
    .max(60, 'Can not be longer than 50 chars')
    .required('Required'),
  description: Yup.string()
    .min(20, 'Must be 20 chars or more')
    .max(2000, 'Can not be longer than 2000 chars')
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
  city: Yup.string()
    .min(1, 'Must be 1 chars or more')
    .max(60, 'Can not be longer than 60 chars')
    .required('Required'),
});

const AddAccommodationForm = () => {
  const dispatch = useDispatch();
  const [amenities, setAmenities] = useState({
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
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
        city: '',
        country: '',
      },
    },
    validationSchema,
    onSubmit: (values) => {
      const venueData = {
        name: values.name,
        description: values.description,
        media: values.media,
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
      console.log(venueData);
      dispatch(createVenue(venueData));
    },
  });

  return (
    <div className="flex max-w-4xl mt-40 mx-8 md:mx-auto bg-lightgray rounded-md justify-center">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mt-2">
            <div>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <AddInfoAccommodation formik={formik} />
                {/* <AddMediaToAccommodation formik={formik} /> */}
                <AddMetaToAccommodations
                  amenities={amenities}
                  setAmenities={setAmenities}
                  formik={formik}
                />

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white font-semibold rounded-md bg-main hover:bg-hovercolor"
                  >
                    Add Accommodation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccommodationForm;
