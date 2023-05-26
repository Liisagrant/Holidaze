import secondHelper from '../../../public/secondHelper.svg';

const SecondHelper = () => {
  return (
    <div className="bg-lightgray p-4 mx-4 mb-4 rounded-md flex flex-col md:flex-row">
      <div>
        <p className="font-header text-lg text-darkblue font-bold">
          Are you looking forward to your upcoming stay?
        </p>
        <p className="font-paragraph text-sm max-w-xs">
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
