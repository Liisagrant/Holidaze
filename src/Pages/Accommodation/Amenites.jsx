import PropTypes from 'prop-types';
import WifiHighIcon from '../../Image/WifiHigh.svg';
import CarIcon from '../../image/Car.svg';
import CatIcon from '../../image/Cat.svg';
import ForkKnifeIcon from '../../image/ForkKnife.svg';

const Amenities = ({ wifi, parking, pets, breakfast }) => {
  return (
    <div className="flex flex-row">
      {wifi && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src={WifiHighIcon} alt="WiFi" className="h-4 w-4" />
          </div>
          <span className="text-xs">WiFi</span>
        </div>
      )}
      {parking && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src={CarIcon} alt="Parking" className="h-4 w-4" />
          </div>
          <span className="text-xs">Parking</span>
        </div>
      )}
      {pets && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src={CatIcon} alt="Pets" className="h-4 w-4" />
          </div>
          <span className="text-xs">Pets</span>
        </div>
      )}
      {breakfast && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src={ForkKnifeIcon} alt="Breakfast" className="h-4 w-4" />
          </div>
          <span className="text-xs">Breakfast</span>
        </div>
      )}
    </div>
  );
};

Amenities.propTypes = {
  wifi: PropTypes.bool.isRequired,
  parking: PropTypes.bool.isRequired,
  pets: PropTypes.bool.isRequired,
  breakfast: PropTypes.bool.isRequired,
};

export default Amenities;
