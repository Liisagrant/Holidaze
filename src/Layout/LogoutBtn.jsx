import React from 'react';

const LogoutBtn = ({ handleLogout }) => {
  return (
    <div>
      <li>
        <button
          onClick={handleLogout}
          className="text-main text-sm font-header bg-backgroundwhite px-4 py-0.5 rounded-md font-md hover:text-backgroundwhite hover:bg-main focus:outline-none"
        >
          Logout
        </button>
      </li>
    </div>
  );
};

export default LogoutBtn;
