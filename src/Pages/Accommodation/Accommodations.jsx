import AllAccommodations from './AllAccommodations';
import BreadCrumbs from '../../Global/BreadCrumbs';

function Accommodations() {
  const breadcrumb = [
    { name: 'Home', path: '/' },
    { name: 'Accommodations', path: '/Accommodations' },
  ];
  return (
    <div>
      <div className="mt-40 max-w-7xl mx-auto">
        <BreadCrumbs breadcrumb={breadcrumb} />
        <AllAccommodations />
      </div>
    </div>
  );
}

export default Accommodations;
