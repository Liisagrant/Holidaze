import PropTypes from 'prop-types';

const Amenities = ({ wifi, parking, pets, breakfast }) => {
  return (
    <div className="flex flex-row">
      {wifi && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src="/WifiHigh.svg" alt="WiFi" className="h-4 w-4" />
          </div>
          <span className="text-xs">WiFi</span>
        </div>
      )}
      {parking && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src="/Car.svg" alt="Parking" className="h-4 w-4" />
          </div>
          <span className="text-xs">Parking</span>
        </div>
      )}
      {pets && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src="/Cat.svg" alt="Pets" className="h-4 w-4" />
          </div>
          <span className="text-xs">Pets</span>
        </div>
      )}
      {breakfast && (
        <div className="flex flex-col items-center">
          <div className="m-2 rounded-full bg-lightblue p-2">
            <img src="/ForkKnife.svg" alt="Breakfast" className="h-4 w-4" />
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
