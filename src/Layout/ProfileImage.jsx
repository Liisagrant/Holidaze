import React from 'react';

const ProfileImage = ({ avatar }) => {
  return (
    <div className="flex items-center ml-4 flex-shrink-0">
      <div>
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
            src={avatar}
            alt="user avatar"
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileImage;
