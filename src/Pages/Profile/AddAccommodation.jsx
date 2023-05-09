import { Link } from 'react-router-dom';

const AddAccommodation = () => {
  return (
    <>
      <div className="bg-lightgray p-4 mx-4 rounded-md">
        <p className="font-header text-lg text-darkblue font-bold">
          Add an accommodation
        </p>
        <p className="font-paragraph text-sm max-w-sm">
          Looking to add a new accommodation? Simply click the button, and we'll
          guide you through the process effortlessly. You won't believe how easy
          it is!
        </p>
        <div className="flex justify-end">
          <Link to="/AddNewAccommodation">
            <button
              type="submit"
              className="flex font-header justify-center rounded-md bg-main px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm my-4 hover:bg-hovercolor"
            >
              Add accommodation
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddAccommodation;
