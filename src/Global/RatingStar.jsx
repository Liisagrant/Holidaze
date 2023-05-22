const RatingStar = ({ venue }) => {
  const rating =
    venue.rating && Number.isInteger(venue.rating) && venue.rating <= 5
      ? venue.rating
      : 0;

  return (
    <div className="my-2">
      {rating >= 1 ? (
        <p className="font-body text-md font-light">
          {[...Array(rating)].map((_, i) => (
            <span className="text-second" key={i}>
              ★
            </span>
          ))}
          {[...Array(5 - Math.round(rating))].map((_, i) => (
            <span className="text-blue" key={i}>
              ☆
            </span>
          ))}
        </p>
      ) : (
        <p className="font-body text-sm font-light">
          {[...Array(5)].map((_, i) => (
            <span className="text-blue" key={i}>
              ☆
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default RatingStar;
