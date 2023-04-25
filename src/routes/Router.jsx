import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Accommodations from '../components/Accommodation/Accommodations';
import AccommodationDetail from '../components/AccommodationDetail/AccommodationsDetail';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Contact from '../components/Contact/Contact';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accommodations" element={<Accommodations />} />
        <Route path="/Accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Router;
