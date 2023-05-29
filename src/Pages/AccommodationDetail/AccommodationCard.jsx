import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenuesSlice';
import { Link } from 'react-router-dom';
import Amenities from '../Accommodation/Amenites';
import NoData from '../../Image/NoData.jpg';
import NoImage from '../../Image/NoImage.png';
import BreadCrumbs from '../../Global/BreadCrumbs';
import RatingStar from '../../Global/RatingStar';
import { setLoadingState } from '../../store/modules/loaderSlice';
import BookAccommodationForm from '../BookAccommodation/BookAccommodationForm';

function AccommodationCard() {
  const dispatch = useDispatch();
  const singleAccommodation = useSelector((state) => state.Venues.singleVenue);
  let { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const accessToken = localStorage.getItem('accessToken');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = (e) => {
    e.target.src = NoData;
  };

  useEffect(() => {
    if (id) {
      dispatch(setLoadingState(true));
      dispatch(fetchSingleVenue(id))
        .catch((error) => {
          console.error('An error occurred: ', error);
        })
        .finally(() => {
          dispatch(setLoadingState(false));
        });
    }
  }, [dispatch, id]);

  const { name, media, description, price, maxGuests, meta, location } =
    singleAccommodation || {};

  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/Accommodations' },
    { name: name, path: `/Accommodation/${id}` },
  ];

  return (
    <div className="max-w-7xl">
      <BreadCrumbs breadcrumb={breadcrumb} />
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-darkblue bg-opacity-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-screen overflow-auto"
          >
            <BookAccommodationForm setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
      <div className="mx-4 mt-10 flex items-center justify-center">
        {singleAccommodation && (
          <div className="flex flex-col overflow-hidden rounded-md border-2 border-lightgray bg-backgroundwhite shadow-md md:flex-row">
            <div className="mx-auto p-4">
              {media && (
                <div>
                  <img
                    src={media.length > 0 ? media[activeImage] : NoImage}
                    alt={`Venue ${activeImage}`}
                    className="mb-4 h-80 w-80 rounded-md object-cover"
                    onError={handleImageError}
                  />
                  {media.length > 1 && (
                    <div className="flex max-w-xs justify-center md:max-w-none">
                      {media.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          onError={handleImageError}
                          alt={`Thumbnail ${index}`}
                          onClick={() => setActiveImage(index)}
                          className={`${
                            media.length === 2
                              ? 'h-36 w-36'
                              : media.length === 3
                              ? 'h-24 w-24'
                              : media.length === 4
                              ? 'h-20 w-16'
                              : 'h-16 w-10'
                          } mx-auto cursor-pointer rounded-md object-cover ${
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
            <div className="flex-1 p-4">
              <h1 className="mb-4 text-2xl font-bold text-gray-800">{name}</h1>

              <div className="mb-2 flex items-center">
                <span className="mr-2 font-medium text-gray-600">Price:</span>
                <span className="font-semibold text-gray-800">{price} $</span>
              </div>

              <div className="mb-2 flex items-center">
                <span className="mr-2 font-medium text-gray-600">
                  Max Guests:
                </span>
                <span className="font-semibold text-gray-800">{maxGuests}</span>
              </div>
              <div className="mt-4">
                <RatingStar venue={singleAccommodation} />
                <span className="mr-2 text-xs font-semibold text-gray-800 md:text-sm">
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
              <div className="mx-auto mt-4 w-60 border-t border-main shadow-md md:mx-0 md:w-96"></div>
              <div className="my-4 flex max-w-xs flex-col">
                {location && (
                  <>
                    <p className="mr-2 font-medium text-gray-600">
                      This location is at:
                    </p>
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="m-2 font-paragraph text-sm">
                          Continent: {location.continent}
                        </p>
                        <p className="m-2 font-paragraph text-sm">
                          Country: {location.country}
                        </p>
                      </div>
                      <div>
                        <p className="m-2 font-paragraph text-sm">
                          City: {location.city}
                        </p>
                        <p className="m-2 font-paragraph text-sm">
                          Address: {location.address}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mx-auto mt-4 w-60 border-t border-main shadow-md md:mx-0 md:w-96"></div>
              <p className="my-6 max-w-md text-gray-700">{description}</p>
              <div>
                {accessToken ? (
                  <div className="max-w-sm">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full rounded  bg-main px-4 py-2 font-bold text-white hover:bg-hovercolor"
                    >
                      Book
                    </button>
                  </div>
                ) : (
                  <div className="my-4 flex max-w-sm flex-col">
                    <span className=" text-md mb-4 text-gray-700">
                      You are not Logged In.If you want to book this
                      accommodation, please log in first.
                    </span>
                    <Link to="/Login">
                      <div className="flex justify-end">
                        <button className="w-full rounded bg-main px-4 py-2 font-bold text-white hover:bg-hovercolor">
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
