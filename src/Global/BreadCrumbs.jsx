import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumb }) => (
  <div className="max-w-7xl mx-auto px-12">
    <nav aria-label="max-w-7xl mx-auto">
      <ol className="flex flex-row mb-6 ml-8">
        {breadcrumb.map((bc, index) => (
          <li
            key={bc.path}
            className="text-sm text-gray-800 font-paragraph flex items-center underline"
          >
            <Link to={bc.path}>{bc.name}</Link>
            {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Breadcrumbs;
