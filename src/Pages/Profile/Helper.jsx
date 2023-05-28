import helperSvg from '../../../public/helperSvg.svg';

const Helper = () => {
  return (
    <div className="mx-4 mb-4 flex flex-col rounded-md bg-lightgray p-4 md:flex-row">
      <div>
        <p className="font-header text-lg font-bold text-darkblue">
          Pssssst... Are Your renting out?
        </p>
        <p className="max-w-xs font-paragraph text-sm">
          To view, update, or delete your accommodations, simply click on
          &quot;See Your RentOuts&quot; in your profile menu. This will allow
          you to view your rentOuts in detail and easily make any necessary
          updates or deletions.
        </p>
      </div>
      <div className="flex justify-end">
        <img className="h-40" src={helperSvg} alt="helper image" />{' '}
      </div>
    </div>
  );
};

export default Helper;
