import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Amenities from '../Accommodation/Amenites';

function AccommodationCard() {
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  let { id } = useParams();

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
        <div className="flex flex-col-reverse md:flex-row-reverse bg-lightgray">
          {/* Accommodation details container */}
          <div className="p-4 max-w-xl">
            <h1 className="font-header font-bold text-xl py-2">{name}</h1>
            <p className="font-bold font-header">Price: {price} kr</p>
            <p className="font-bold font-header">Max Guests: {maxGuests}</p>
            {meta && (
              <Amenities
                wifi={meta.wifi}
                parking={meta.parking}
                pets={meta.pets}
                breakfast={meta.breakfast}
              />
            )}
            <p className="font-paragraph py-1 mt-10">{description}</p>
          </div>

          {/* Carousel container */}
          <div className="p-4">
            {media?.length > 1 ? (
              <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                {media.map((image, index) => (
                  <div key={index} className="w-80 h-80 md:w-96 md:h-96">
                    <img
                      src={image}
                      alt={`Venue ${index}`}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              media && (
                <img
                  src={media[0]}
                  alt="Venue"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-md"
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AccommodationCard;
