import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileMenu from './ProfileMenu';
import { getUserDetails } from '../../utils/Auth';
import { fetchSingleProfile } from '../../store/modules/ProfileSlice';

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
    <div className="flex justify-center mt-40">
      <ProfileMenu
        avatar={userAvatar}
        userEmail={userEmail}
        userName={userName}
      />
    </div>
  );
};

export default Profile;
