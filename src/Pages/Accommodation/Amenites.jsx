import React from 'react';

const Amenities = ({ wifi, parking, pets, breakfast }) => {
  return (
    <div className="flex flex-row">
      {wifi && (
        <div className="flex flex-col items-center">
          <img src="/WifiHigh.svg" alt="WiFi" className="m-2" />
          <span className="text-sm">WiFi</span>
        </div>
      )}
      {parking && (
        <div className="flex flex-col items-center">
          <img src="/Car.svg" alt="Parking" className="m-2" />
          <span className="text-sm">Parking</span>
        </div>
      )}
      {pets && (
        <div className="flex flex-col items-center">
          <img src="/Cat.svg" alt="Pets" className="m-2" />
          <span className="text-sm">Pets</span>
        </div>
      )}
      {breakfast && (
        <div className="flex flex-col items-center">
          <img src="/ForkKnife.svg" alt="Breakfast" className="m-2" />
          <span className="text-sm">Breakfast</span>
        </div>
      )}
    </div>
  );
};

export default Amenities;
