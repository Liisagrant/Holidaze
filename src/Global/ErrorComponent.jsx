import error from '../../public/error.svg';
const ErrorComponent = () => {
  return (
    <div className="h-96 w-full" role="alert">
      <div className="flex justify-center items-center bg-red-100 rounded border-2 border-red-800 text-red-900 px-4 py-3 shadow-md mt-4 ">
        <div className="py-1"></div>
        <div>
          <p className="font-bold">Error</p>
          <p className="text-sm">Sorry we have an error</p>
          <img src={error} alt="error image" className="h-40" />
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
