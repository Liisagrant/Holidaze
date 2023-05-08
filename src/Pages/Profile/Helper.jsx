import React from 'react';
import helperSvg from '../../../public/helperSvg.svg';

const Helper = () => {
  return (
    <div className="bg-lightgray p-4 mx-4 mb-4 rounded-md flex flex-row">
      <div>
        <p className="font-header text-lg text-darkblue font-bold">
          Pssssst...
        </p>
        <p className="font-paragraph text-sm max-w-xs">
          Too see, update or delet a Accommodations you can just click the card.
        </p>
      </div>
      <div className="flex justify-end">
        <img className="h-40" src={helperSvg} alt="helper image" />{' '}
      </div>
    </div>
  );
};

export default Helper;
