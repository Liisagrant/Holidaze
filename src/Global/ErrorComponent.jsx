import error from '../Image/error.svg';

const ErrorComponent = () => {
  return (
    <div className="h-screen" role="alert">
      <div className="mx-8 mt-4 flex justify-center rounded border-2 border-red-800 bg-red-100 px-4 py-3 text-red-900 shadow-md">
        <div className="py-1"></div>
        <div className="flex flex-col items-center justify-center">
          <p className="text content-center font-bold">Error</p>
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
