import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import { getUserDetails } from '../../utils/Auth';
import { fetchSingleProfile } from '../../store/modules/ProfileSlice';
import AddAccommodation from './AddAccommodation';
import Helper from './Helper';
import UserBookings from './UserBookings';
import RentOuts from './RentOuts';

const Profile = () => {
  const dispatch = useDispatch();
  const userDetails = getUserDetails();
  const singleProfile = useSelector((state) => state.Profile.singleProfile);
  const [userAvatar, setUserAvatar] = useState(userDetails.avatar);
  const [userEmail, setUserEmail] = useState(userDetails.email);
  const [userName, setUserName] = useState(userDetails.username);

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

  console.log(userDetails);

  return (
    <div className="flex justify-center flex-col lg:flex-row mt-40 max-w-7xl mx-auto">
      <div className="m-2">
        <ProfileMenu
          avatar={userAvatar}
          userEmail={userEmail}
          userName={userName}
        />
      </div>
      <div className="m-2">
        <AddAccommodation />
        <UserBookings />
      </div>
      <div className="m-2">
        <Helper />
        <RentOuts />
      </div>
    </div>
  );
};

export default Profile;
