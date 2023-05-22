import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH } from '../store/modules/VenuesSlice';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const searchQuery = useSelector((state) => state.Venues.search);

  const handleSearchChange = (e) => {
    dispatch(SET_SEARCH(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SET_SEARCH(e.target.elements.search.value));
    navigate('/Accommodations');
  };

  return (
    <div className="relative z-0 flex flex-1 items-center justify-center px-2">
      <div className="w-full sm:max-w-xs">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              name="search"
              className="block w-full rounded-md border-0 bg-backgroundwhite py-1.5 pl-10 pr-3 text-main placeholder:text-gray-400 focus:bg-white focus:placeholder:text-gray-500 sm:text-sm sm:leading-6 focus:outline-none"
              placeholder="Search"
              type="search"
              onChange={handleSearchChange}
              value={searchQuery}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
