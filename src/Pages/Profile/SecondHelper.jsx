import secondHelper from '../../Image/secondHelper.svg';

const SecondHelper = () => {
  return (
    <div className="mx-4 mb-4 flex flex-col rounded-md bg-lightgray p-4 md:flex-row">
      <div>
        <p className="font-header text-lg font-bold text-darkblue">
          Are you looking forward to your upcoming stay?
        </p>
        <p className="max-w-xs font-paragraph text-sm">
          If you need to review your accommodation details or discover local
          attractions, simply click &quot;see your bookings&quot; and
          effortlessly access all the necessary information.
        </p>
      </div>
      <div className="flex justify-end">
        <img className="h-40" src={secondHelper} alt="helper image" />
      </div>
    </div>
  );
};

export default SecondHelper;
