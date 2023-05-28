import PropTypes from 'prop-types';

const LogoutBtn = ({ handleLogout }) => {
  return (
    <div>
      <button
        onClick={handleLogout}
        className="font-md rounded-md bg-backgroundwhite px-4 py-0.5 font-header text-sm text-main hover:bg-second hover:text-backgroundwhite focus:outline-none"
      >
        Logout
      </button>
    </div>
  );
};

LogoutBtn.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default LogoutBtn;
