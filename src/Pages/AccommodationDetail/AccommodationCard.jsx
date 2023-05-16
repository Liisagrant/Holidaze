import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import { Link } from 'react-router-dom';
import Amenities from '../Accommodation/Amenites';
import NoData from '../../../public/NoData.jpg';
import NoImage from '../../../public/NoImage.png';
import BreadCrumbs from '../../Global/BreadCrumbs';
import RatingStar from '../../Global/RatingStar';
import { setLoadingState } from '../../store/modules/loaderSlice';
import SpinnerComponent from '../../Global/SpinnerComponent';

function AccommodationCard() {
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  let { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const accessToken = localStorage.getItem('accessToken');

  const handleImageError = (e) => {
    e.target.src = NoData;
  };

  useEffect(() => {
    if (id) {
      dispatch(setLoadingState(true));
      dispatch(fetchSingleVenue(id)).finally(() => {
        dispatch(setLoadingState(false));
      });
    }
  }, [dispatch, id]);

  const { name, media, description, price, maxGuests, rating, meta, location } =
    singleAccommodation || {};

  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/Accommodations' },
    { name: name, path: `/Accommodation/${id}` },
  ];

  return (
    <div className="max-w-7xl">
      <BreadCrumbs breadcrumb={breadcrumb} />
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
                <span className="font-semibold text-gray-800">{price} $</span>
              </div>

              <div className="flex items-center mb-2">
                <span className="font-medium text-gray-600 mr-2">
                  Max Guests:
                </span>
                <span className="font-semibold text-gray-800">{maxGuests}</span>
              </div>
              <div className="mt-4">
                <RatingStar venue={singleAccommodation} />
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
              <div className="my-4 flex flex-col max-w-xs">
                {location && (
                  <>
                    <p className="font-medium text-gray-600 mr-2">
                      This location is at:
                    </p>
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="font-paragraph text-sm m-2">
                          Continent: {location.continent}
                        </p>
                        <p className="font-paragraph text-sm m-2">
                          Country: {location.country}
                        </p>
                      </div>
                      <div>
                        <p className="font-paragraph text-sm m-2">
                          City: {location.city}
                        </p>
                        <p className="font-paragraph text-sm m-2">
                          Address: {location.address}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mx-auto shadow-md w-60 md:w-96 md:mx-0 mt-4 border-t border-main"></div>
              <p className="text-gray-700 my-6 max-w-md">{description}</p>
              <div>
                {accessToken ? (
                  <div className="max-w-sm">
                    <Link to={`/BookAccommodation/${id}`}>
                      <button className="bg-main w-full  hover:bg-hovercolor text-white font-bold py-2 px-4 rounded">
                        Book
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col my-4 max-w-sm">
                    <span className=" text-gray-700 text-md mb-4">
                      You are not Logged In.If you want to book this
                      accommodation, please log in first.
                    </span>
                    <Link to="/Login">
                      <div className="flex justify-end">
                        <button className="w-full bg-main hover:bg-hovercolor text-white font-bold py-2 px-4 rounded">
                          Login
                        </button>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccommodationCard;
