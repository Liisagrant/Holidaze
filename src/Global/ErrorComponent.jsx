import { useSelector } from 'react-redux';
import error from '../../public/error.svg';

const ErrorComponent = () => {
  return (
    <div className="h-screen" role="alert">
      <div className="flex justify-center bg-red-100 rounded border-2 border-red-800 text-red-900 px-4 py-3 shadow-md mt-4 mx-8">
        <div className="py-1"></div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text content-center">Error</p>
          <p className="text-sm">
            Sorry we have an issue getting you the data. Please try agian later
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
