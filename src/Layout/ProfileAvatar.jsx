import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NoAvatar from '../../public/NoAvatar.jpg';

const ProfileAvatar = ({ avatar }) => {
  const handleImageError = (e) => {
    e.target.src = NoAvatar;
  };

  return (
    <div className="flex items-center ml-4 flex-shrink-0">
      <Link to="/Profile">
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={avatar ? avatar : NoAvatar}
            alt="user avatar"
            onError={handleImageError}
          />
        </button>
      </Link>
    </div>
  );
};

ProfileAvatar.propTypes = {
  avatar: PropTypes.string,
};

export default ProfileAvatar;
