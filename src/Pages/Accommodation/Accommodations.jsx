import FilterBox from './FilterBox';
import AllAccommodations from './AllAccommodations';

function Accommodations() {
  return (
    <div>
      <div className="flex flex-col mt-40 lg:flex-row max-w-7xl mx-auto">
        <FilterBox />
        <AllAccommodations />
      </div>
    </div>
  );
}

export default Accommodations;
