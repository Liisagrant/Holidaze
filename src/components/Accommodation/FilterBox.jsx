import React from 'react';
import Calendar from './Calendar';

const FilterBox = () => {
  return (
    <div className="mt-40 ml-16 max-w-7xl">
      <div className="w-80 bg-lightgray py-4 rounded-md">
        <Calendar />
        <label for="price-range">Price Range</label>
        <input
          type="range"
          id="price-range"
          name="price-range"
          min="0"
          max="1000"
          step="10"
          value="500"
        />
      </div>
    </div>
  );
};

export default FilterBox;
