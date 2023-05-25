import React from 'react';
import { useSelector } from 'react-redux';
import error from '../../public/error.svg';

const ErrorComponent = () => {
  const errorState = useSelector((state) => state.error);

  if (!errorState.isError) {
    return null;
  }

  return (
    <div className="h-screen" role="alert">
      <div className="flex justify-center bg-red-100 rounded border-2 border-red-800 text-red-900 px-4 py-3 shadow-md mt-4 mx-8">
        <div className="py-1"></div>
        <div>
          <p className="font-bold text content-center">Error</p>
          <p className="text-sm">
            Sorry! Have an error. Please try again leater
          </p>
          <div>
            <img
              src={error}
              className="h-60"
              alt="Error image. A Robot showing an error sign"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
