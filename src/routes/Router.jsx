import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Accommodations from '../Pages/Accommodation/Accommodations';
import AccommodationDetail from '../Pages/AccommodationDetail/AccommodationsDetail';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Profile from '../Pages/Profile/Profile';
import UpdateAccommodation from '../Pages/UpdateAccommodation/UpdateAccommodation';
import SeeRentoutBookings from '../Pages/SeeBookingsMade/SeeRentoutBookings';
import NotFound from '../Pages/NotFound/NotFound';

function requireAuth(component) {
  const accessToken = localStorage.getItem('accessToken');
  const loggedIn = Boolean(accessToken);

  return loggedIn ? component : <Navigate to="/Login" />;
}

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accommodations" element={<Accommodations />} />
        <Route path="/Accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={requireAuth(<Profile />)} />
        <Route
          path="/UpdateAccommodation/:id"
          element={requireAuth(<UpdateAccommodation />)}
        />
        <Route
          path="/SeeRentoutBookings"
          element={requireAuth(<SeeRentoutBookings />)}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
