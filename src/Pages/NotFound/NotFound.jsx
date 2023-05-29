import NotFoundImage from '../../Image/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <Link to="/">
        <p className="font-header text-xl underline">Return to Home</p>
      </Link>
      <img src={NotFoundImage} alt="404 image Page is not found" />
    </div>
  );
};

export default NotFound;
