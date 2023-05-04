import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import Amenities from '../Accommodation/Amenites';

function AccommodationCard() {
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  let { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleVenue(id));
    }
  }, [dispatch, id]);

  const { name, media, description, price, maxGuests, rating, meta, location } =
    singleAccommodation || {};

  return (
    <div className="flex items-center justify-center mt-10">
      {singleAccommodation && (
        <div className="flex flex-col md:flex-row bg-backgroundwhite shadow-lg rounded-md overflow-hidden">
          <div className="p-4 flex-shrink-0">
            {media && (
              <div>
                <img
                  src={media[activeImage]}
                  alt={`Venue ${activeImage}`}
                  className="w-80 h-80 object-cover rounded-md mb-4"
                />
                {media.length > 1 && (
                  <div className="flex justify-center">
                    {media.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setActiveImage(index)}
                        className={`w-24 h-20 object-cover rounded-md mx-auto cursor-pointer ${
                          activeImage === index
                            ? 'border-2 border-blue-500'
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
              <span className="font-semibold text-gray-800 mr-2">
                Facilities:
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
            <p className="text-gray-700 mt-6 max-w-md">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccommodationCard;
