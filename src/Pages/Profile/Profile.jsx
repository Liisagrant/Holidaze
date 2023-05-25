import { useState, useEffect } from 'react';
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
import BreadCrumbs from '../../Global/BreadCrumbs';
import SpinnerComponent from '../../Global/SpinnerComponent';

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
  const [otherContentDisplayed, setOtherContentDisplayed] = useState(false);
  const isLoading = useSelector((state) => state.loader.isLoading);

  console.log(userDetails.manager);
  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Profile', path: '/Profile' },
  ];

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
    setOtherContentDisplayed(true);
  };

  const handleUserBookings = () => {
    setShowUserBookings(true);
    setShowAddAccommodationForm(false);
    setShowRentOuts(false);
    setOtherContentDisplayed(true);
  };

  const handleRentOuts = () => {
    setShowRentOuts(true);
    setShowAddAccommodationForm(false);
    setShowUserBookings(false);
    setOtherContentDisplayed(true);
  };

  const handleCancelAddAccommodation = () => {
    setShowAddAccommodationForm(false);
    setOtherContentDisplayed(false);
  };

  const handleCancelUserBookings = () => {
    setShowUserBookings(false);
    setOtherContentDisplayed(false);
  };

  const handleCancelRentOuts = () => {
    setShowRentOuts(false);
    setOtherContentDisplayed(false);
  };

  return (
    <div className="mt-40 max-w-7xl mx-auto">
      <BreadCrumbs breadcrumb={breadcrumb} />
      <div className="flex justify-center flex-col lg:flex-row">
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
        {isLoading ? <SpinnerComponent /> : null}
        <div className="m-2">
          {showAddAccommodationForm && (
            <AddAccommodationForm onCancel={handleCancelAddAccommodation} />
          )}
          {showUserBookings && (
            <UserBookings onCancel={handleCancelUserBookings} />
          )}
          {showRentOuts && <RentOuts onCancel={handleCancelRentOuts} />}
          {!showAddAccommodationForm && !showUserBookings && !showRentOuts && (
            <>
              <div className="m-2">
                <AddAccommodation />
              </div>
              <div className="m-2">
                <Helper />
              </div>
              <div className="m-2">
                <SecondHelper />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
