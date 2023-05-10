import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import { getUserDetails } from '../../utils/Auth';
import { fetchSingleProfile } from '../../store/modules/ProfileSlice';
import AddAccommodation from './AddAccommodation';
import AddAccommodationForm from './CreateAccommodation/AddAccommodationForm';
import Helper from './Helper';
import SecondHelper from './SecondHelper';
import UserBookings from './UserBookings';
import RentOuts from './RentOuts';

const Profile = () => {
  const dispatch = useDispatch();
  const userDetails = getUserDetails();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const [userAvatar, setUserAvatar] = useState(userDetails.avatar);
  const [userEmail, setUserEmail] = useState(userDetails.email);
  const [userName, setUserName] = useState(userDetails.username);
  const [showAddAccommodationForm, setShowAddAccommodationForm] =
    useState(false);
  const [showUserBookings, setShowUserBookings] = useState(false);
  const [showRentOuts, setShowRentOuts] = useState(false);

  useEffect(() => {
    if (userDetails.username) {
      dispatch(fetchSingleProfile(userDetails.username));
    }
  }, [dispatch, userDetails.username]);

  useEffect(() => {
    if (singleProfile) {
      setUserAvatar(singleProfile.avatar);
    }
  }, [singleProfile]);

  const handleAddAccommodationClick = () => {
    setShowAddAccommodationForm(true);
    setShowUserBookings(false);
    setShowRentOuts(false);
  };

  const handleUserBookings = () => {
    setShowUserBookings(true);
    setShowAddAccommodationForm(false);
    setShowRentOuts(false);
  };

  const handleRentOuts = () => {
    setShowRentOuts(true);
    setShowAddAccommodationForm(false);
    setShowUserBookings(false);
  };

  const handleCancelAddAccommodation = () => {
    setShowAddAccommodationForm(false);
  };

  const handleCancelUserBookings = () => {
    setShowUserBookings(false);
  };

  const handleCancelRentOuts = () => {
    setShowRentOuts(false);
  };

  return (
    <div className="flex justify-center flex-col lg:flex-row mt-40 max-w-7xl mx-auto">
      <div className="m-2">
        <ProfileMenu
          avatar={userAvatar}
          userEmail={userEmail}
          userName={userName}
          onAddAccommodationClick={handleAddAccommodationClick}
          onCancelAddAccommodation={handleCancelAddAccommodation}
          onUserBookingsClick={handleUserBookings}
          onCancelUserBookings={handleCancelUserBookings}
          onRentOutsClick={handleRentOuts}
          onCancelRentOuts={handleCancelRentOuts}
        />
      </div>
      <div className="m-2">
        {showAddAccommodationForm ? (
          <AddAccommodationForm onCancel={handleCancelAddAccommodation} />
        ) : (
          ''
        )}
        {showUserBookings ? (
          <UserBookings onCancel={handleCancelUserBookings} />
        ) : null}
        {showRentOuts ? <RentOuts onCancel={handleCancelRentOuts} /> : null}
        <div className="m-2">
          <AddAccommodation userName={userName} />
        </div>
        <div className="m-2">
          <Helper />
        </div>
        <div className="m-2">
          <SecondHelper />
        </div>
      </div>
    </div>
  );
};

export default Profile;
