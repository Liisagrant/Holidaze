import React from 'react';
import Calendar from './Calendar';

const FilterBox = () => {
  return (
    <div className="mx-auto mb-4 md:ml-16 max-w-7xl">
      <div className="w-60 bg-lightgray rounded-md">
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
