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
    <div className="mt-40 flex justify-center">
      {singleAccommodation && (
        <div className="flex flex-col-reverse md:flex-row-reverse bg-lightgray rounded-md">
          {/* Accommodation details container */}
          <div className="p-4">
            <h1 className="font-header font-bold text-xl text-shadow-md py-2 text-main">
              {name}
            </h1>
            <p className="font-bold font-header text-darkblue">
              Price: {price} kr
            </p>
            <p className="font-bold font-header text-darkblue">
              Max Guests: {maxGuests}
            </p>
            <div className="mt-8">
              {meta && (
                <Amenities
                  wifi={meta.wifi}
                  parking={meta.parking}
                  pets={meta.pets}
                  breakfast={meta.breakfast}
                />
              )}
            </div>
            <p className="font-paragraph py-1 mt-8 max-w-md">{description}</p>
          </div>

          {/* Image gallery container */}
          <div className="p-4">
            {media && (
              <div>
                <img
                  src={media[activeImage]}
                  alt={`Venue ${activeImage}`}
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-md"
                />
                {media.length > 1 && (
                  <div className="mt-4 flex gap-2 justify-between">
                    {media.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => setActiveImage(index)}
                        className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md cursor-pointer"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AccommodationCard;
