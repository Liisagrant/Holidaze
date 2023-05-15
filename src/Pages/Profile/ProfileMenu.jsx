import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import NoAvatar from '../../../public/NoAvatar.jpg';
import { updateLocalStorage } from '../../utils/Auth';
import { getUserDetails } from '../../utils/Auth';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  avatar: Yup.string()
    .url('Invalid URL')
    .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL'),
});

const venueManager = localStorage.getItem('venueManager');

const ProfileMenu = ({
  avatar,
  userEmail,
  userName,
  onAddAccommodationClick,
  onUserBookingsClick,
  onRentOutsClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(getUserDetails());
  const [venueManager, setVenueManager] = useState(false);

  useEffect(() => {
    const storedVenueManager = localStorage.getItem('venueManager');
    setVenueManager(storedVenueManager === 'true');
  }, []);

  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await formik.validateForm();
        const response = await fetch(
          `https://nf-api.onrender.com/api/v1/holidaze/profiles/${userName}/media`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ avatar: values.avatar }),
          }
        );
        if (response.ok) {
          updateLocalStorage('avatar', values.avatar);
          setIsModalOpen(false);
          window.location.reload();
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        console.error(error);
      }
      setSubmitting(false);
    },
  });

  return (
    <div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-darkblue bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-backgroundwhite rounded-md p-16">
            <p className="text-main text-xl mx-4 font-header font-bold mb-4">
              Update your Avatar
            </p>
            <div className="m-4 mb-8 w-96">
              <label
                htmlFor="avatar"
                className="block text-sm font-paragraph font-medium leading-6 text-gray-900"
              >
                Avatar
              </label>
              <div className="mt-2">
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.avatar}
                  id="avatar"
                  name="avatar"
                  type="avatar"
                  autoComplete="avatar"
                  className="block w-full font-paragraph rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.avatar && formik.errors.avatar ? (
                  <div className="text-red-600 text-sm">
                    {formik.errors.avatar}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mr-4 px-4 py-2 text-white font-semibold rounded-md bg-gray-400 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="px-4 py-2 text-white font-semibold rounded-md bg-main hover:bg-hovercolor"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-main rounded-md p-4 md:p-8 mx-4">
        <div className="flex flex-col md:flex-row md:justify-center lg:flex-col">
          <div className="flex items-center justify-center">
            <div className="bg-backgroundwhite p-2 rounded-full">
              <img
                className="h-24 w-24 md:h-40 md:w-40 rounded-full"
                src={avatar ? avatar : NoAvatar}
                alt="user avatar"
              />
            </div>
          </div>
          <div className="px-4">
            <p className="text-backgroundwhite font-header font-bold text-2xl px-2 text-center my-2">
              {userName}
            </p>
            <p className="text-backgroundwhite text-sm px-2 text-center my-2">
              {userEmail}
            </p>
            <button
              type="submit"
              onClick={() => setIsModalOpen(true)}
              className="flex w-full md:w-60 md:mx-auto font-header justify-center rounded-md bg-second px-2 py-1.5 text-sm hover:bg-hovercolor font-semibold leading-6 text-black hover:text-white hover:border-2 shadow-sm my-4"
            >
              Update Avatar
            </button>
            {venueManager ? (
              <>
                <div className="flex justify-end">
                  <button
                    onClick={onAddAccommodationClick}
                    type="submit"
                    className="flex w-full md:w-60 md:mx-auto font-header justify-center rounded-md bg-backgroundwhite hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-black hover:text-white hover:border-2 shadow-sm my-4"
                  >
                    Add accommodation
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={onRentOutsClick}
                    type="submit"
                    className="flex w-full md:w-60 md:mx-auto font-header justify-center rounded-md bg-backgroundwhite hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-black hover:text-white hover:border-2 shadow-sm my-4"
                  >
                    See Rent Outs
                  </button>
                </div>
              </>
            ) : null}
            <div className="flex justify-end">
              <button
                onClick={onUserBookingsClick}
                type="submit"
                className="flex w-full md:w-60 md:mx-auto font-header justify-center rounded-md bg-backgroundwhite hover:bg-hovercolor px-2 py-1.5 text-sm font-semibold leading-6 text-black hover:text-white hover:border-2 shadow-sm my-4"
              >
                See Your Bookings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
