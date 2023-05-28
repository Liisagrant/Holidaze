import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumb }) => (
  <div className="mx-auto max-w-7xl md:px-12">
    <nav aria-label="max-w-7xl mx-auto">
      <ol className="mb-6 ml-8 flex flex-row">
        {breadcrumb.map((bc, index) => (
          <li
            key={bc.path}
            className="flex items-center font-paragraph text-sm text-gray-800 underline"
          >
            <Link to={bc.path}>{bc.name}</Link>
            {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

Breadcrumbs.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;
