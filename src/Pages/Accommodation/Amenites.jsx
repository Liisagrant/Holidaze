import React from 'react';

const Amenities = ({ wifi, parking, pets, breakfast }) => {
  return (
    <div className="flex">
      {wifi && <img src="/WifiHigh.svg" alt="WiFi" className="m-2" />}
      {parking && <img src="/Car.svg" alt="Parking" className="m-2" />}
      {pets && <img src="/Cat.svg" alt="Pets" className="m-2" />}
      {breakfast && (
        <img src="/ForkKnife.svg" alt="Breakfast" className="m-2" />
      )}
    </div>
  );
};

export default Amenities;
