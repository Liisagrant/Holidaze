import helperSvg from '../../../public/helperSvg.svg';

const Helper = () => {
  return (
    <div className="bg-lightgray p-4 mx-4 mb-4 rounded-md flex flex-col md:flex-row">
      <div>
        <p className="font-header text-lg text-darkblue font-bold">
          Pssssst... Are Your renting out?
        </p>
        <p className="font-paragraph text-sm max-w-xs">
          To view, update, or delete your accommodations, simply click on "See
          Your RentOuts" in your profile menu. This will allow you to view your
          rentOuts in detail and easily make any necessary updates or deletions.
        </p>
      </div>
      <div className="flex justify-end">
        <img className="h-40" src={helperSvg} alt="helper image" />{' '}
      </div>
    </div>
  );
};

export default Helper;
