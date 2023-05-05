import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import Amenities from '../Accommodation/Amenites';
import NoData from '../../../public/NoData.jpg';
import NoImage from '../../../public/NoImage.png';

function AccommodationCard() {
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  let { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const handleImageError = (e) => {
    e.target.src = NoData;
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleVenue(id));
    }
  }, [dispatch, id]);

  const { name, media, description, price, maxGuests, rating, meta, location } =
    singleAccommodation || {};

  return (
    <div className="flex items-center justify-center mt-10 mx-4">
      {singleAccommodation && (
        <div className="flex flex-col md:flex-row bg-backgroundwhite border-lightgray border-2 shadow-md rounded-md overflow-hidden">
          <div className="p-4 mx-auto">
            {media && (
              <div>
                <img
                  src={media.length > 0 ? media[activeImage] : NoImage}
                  alt={`Venue ${activeImage}`}
                  className="w-80 h-80 object-cover rounded-md mb-4"
                  onError={handleImageError}
                />
                {media.length > 1 && (
                  <div className="flex justify-center max-w-xs md:max-w-none">
                    {media.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        onError={handleImageError}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setActiveImage(index)}
                        className={`${
                          media.length === 2
                            ? 'w-36 h-36'
                            : media.length === 3
                            ? 'w-24 h-24'
                            : media.length === 4
                            ? 'w-16 h-20'
                            : 'w-10 h-16'
                        } object-cover rounded-md mx-auto cursor-pointer ${
                          activeImage === index
                            ? 'border-2 border-lightblue'
                            : 'border border-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="p-4 flex-1">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">{name}</h1>
            <div className="flex items-center mb-2">
              <span className="font-medium text-gray-600 mr-2">Price:</span>
              <span className="font-semibold text-gray-800">{price} kr</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="font-medium text-gray-600 mr-2">
                Max Guests:
              </span>
              <span className="font-semibold text-gray-800">{maxGuests}</span>
            </div>
            <div className="mt-4">
              <span className="font-semibold text-xs md:text-sm text-gray-800 mr-2">
                This accommodation offers the following amenities:
              </span>
              {meta && (
                <Amenities
                  wifi={meta.wifi}
                  parking={meta.parking}
                  pets={meta.pets}
                  breakfast={meta.breakfast}
                />
              )}
            </div>
            <div className="mx-auto shadow-md w-60 md:w-96 md:mx-0 mt-4 border-t border-main"></div>
            <p className="text-gray-700 my-6 max-w-md">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccommodationCard;
