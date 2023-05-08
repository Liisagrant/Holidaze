import React from 'react';

const RentOuts = () => {
  return (
    <div className="relative">
      <div className="bg-lightgray p-4 mx-4 my-4 rounded-md flex flex-col">
        <p className="font-header text-lg text-darkblue font-bold">
          Active Rental Properties
        </p>
        <div className="bg-backgroundwhite p-2 flex flex-row my-2 rounded-md">
          <div className="flex flex-row">
            <img
              className="rounded-md h-40"
              src="../../../public/defaultTopRated.jpg"
              alt="Image of the house you booked"
            />
          </div>
          <div>
            <p className="font-header font-bold text-md px-2">
              Title of the house
            </p>
            <div class="mx-auto shadow-md w-20 my-4 border-t border-main"></div>
            <p className="font-paragraph text-sm px-2"> Booked from:</p>
            <p className="font-paragraph text-sm px-2"> 4 juni 2023</p>
            <div className="flex justify-end">
              <span className="bg-red-800 text-white p-1 m-2 rounded-md">
                Rented out
              </span>
            </div>
          </div>
        </div>
        <div className="bg-backgroundwhite p-1 flex flex-row my-2 rounded-md">
          <div className="flex flex-row">
            <img
              className="rounded-md h-40"
              src="../../../public/defaultTopRated.jpg"
              alt="Image of the house you booked"
            />
          </div>
          <div>
            <p className="font-header font-bold text-md px-2">
              Title of the house
            </p>
            <div class="mx-auto shadow-md w-20 my-4 border-t border-main"></div>
            <p className="font-paragraph text-sm px-2"> Booked from:</p>
            <p className="font-paragraph text-sm px-2"> 4 juni 2023</p>
            <div className="flex justify-end">
              <span className="bg-green-600 p-2 m-2 rounded-md">Active</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">
        2
      </div>
    </div>
  );
};

export default RentOuts;
