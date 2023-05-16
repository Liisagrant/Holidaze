import { Link } from 'react-router-dom';

const RatingStar = ({ venue }) => {
  return (
    <div className="my-2">
      {venue.rating >= 1 ? (
        <p className="font-body text-md font-light">
          {[...Array(venue.rating)].map((_, i) => (
            <span className="text-second" key={i}>
              ★
            </span>
          ))}
          {[...Array(5 - Math.round(venue.rating))].map((_, i) => (
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
