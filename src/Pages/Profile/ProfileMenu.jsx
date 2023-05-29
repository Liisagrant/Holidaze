import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import NoAvatar from '../../Image/NoAvatar.jpg';
import { updateLocalStorage } from '../../utils/Auth';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  avatar: Yup.string()
    .url('Invalid URL')
    .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL'),
});

const ProfileMenu = ({
  avatar,
  userEmail,
  userName,
  onAddAccommodationClick,
  onUserBookingsClick,
  onRentOutsClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [venueManager, setVenueManager] = useState(false);

  const handleImageError = (e) => {
    e.target.src = NoAvatar;
  };

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
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-darkblue bg-opacity-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-md bg-backgroundwhite p-16"
          >
            <button
              className="text-md absolute right-0 top-0 m-4 text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
            <p className="mx-4 mb-4 font-header text-xl font-bold text-main">
              Update your Avatar
            </p>
            <div className="m-4 mb-8 w-96">
              <label
                htmlFor="avatar"
                className="block font-paragraph text-sm font-medium leading-6 text-gray-900"
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
                  className="block w-full rounded-md border-0 py-1.5 font-paragraph shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.avatar && formik.errors.avatar ? (
                  <div className="text-sm text-red-600">
                    {formik.errors.avatar}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mr-4 rounded-md bg-gray-400 px-4 py-2 font-semibold text-white hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="rounded-md bg-main px-4 py-2 font-semibold text-white hover:bg-hovercolor"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mx-4 rounded-md bg-main p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-center lg:flex-col">
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-backgroundwhite p-2">
              <img
                className="h-24 w-24 rounded-full md:h-40 md:w-40"
                src={avatar ? avatar : NoAvatar}
                alt="user avatar"
                onError={handleImageError}
              />
            </div>
          </div>
          <div className="px-4">
            <p className="my-2 px-2 text-center font-header text-2xl font-bold text-backgroundwhite">
              {userName}
            </p>
            <p className="my-2 px-2 text-center text-sm text-backgroundwhite">
              {userEmail}
            </p>
            <button
              type="submit"
              onClick={() => setIsModalOpen(true)}
              className="my-4 flex w-full justify-center rounded-md bg-second px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:border-2 hover:bg-hovercolor hover:text-white md:mx-auto md:w-60"
            >
              Update Avatar
            </button>
            {venueManager ? (
              <>
                <div className="flex justify-end">
                  <button
                    onClick={onAddAccommodationClick}
                    type="submit"
                    className="my-4 flex w-full justify-center rounded-md bg-backgroundwhite px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:border-2 hover:bg-hovercolor hover:text-white md:mx-auto md:w-60"
                  >
                    Add accommodation
                  </button>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={onRentOutsClick}
                    type="submit"
                    className="my-4 flex w-full justify-center rounded-md bg-backgroundwhite px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:border-2 hover:bg-hovercolor hover:text-white md:mx-auto md:w-60"
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
                className="my-4 flex w-full justify-center rounded-md bg-backgroundwhite px-2 py-1.5 font-header text-sm font-semibold leading-6 text-black shadow-sm hover:border-2 hover:bg-hovercolor hover:text-white md:mx-auto md:w-60"
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

ProfileMenu.propTypes = {
  avatar: PropTypes.string,
  userEmail: PropTypes.string,
  userName: PropTypes.string,
  onAddAccommodationClick: PropTypes.func,
  onUserBookingsClick: PropTypes.func,
  onRentOutsClick: PropTypes.func,
};

export default ProfileMenu;
