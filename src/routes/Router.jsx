import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Accommodations from '../Pages/Accommodation/Accommodations';
import AccommodationDetail from '../Pages/AccommodationDetail/AccommodationsDetail';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Profile from '../Pages/Profile/Profile';
import UpdateAccommodation from '../Pages/UpdateAccommodation/UpdateAccommodation';
import SeeRentoutBookings from '../Pages/SeeBookingsMade/SeeRentoutBookings';
import NotFound from '../Pages/NotFound/NotFound';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accommodations" element={<Accommodations />} />
        <Route path="/Accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route
          path="/UpdateAccommodation/:id"
          element={<UpdateAccommodation />}
        />
        <Route path="/SeeRentoutBookings" element={<SeeRentoutBookings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
