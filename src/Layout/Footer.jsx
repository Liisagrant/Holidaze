import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="bg-main mt-80">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-6 sm:py-24 lg:px-8">
          <nav
            className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
            aria-label="Footer"
          >
            <div className="pb-6">
              <NavLink
                to="/"
                className="text-sm leading-6 text-backgroundwhite hover:text-darkblue"
              >
                Home
              </NavLink>
            </div>
            <div className="pb-6">
              <NavLink
                to="/Accommodations"
                className="text-sm leading-6  text-backgroundwhite hover:text-darkblue"
              >
                Accommodations
              </NavLink>
            </div>
            <div className="pb-6">
              <NavLink
                to="/Login"
                className="text-sm leading-6  text-backgroundwhite hover:text-gray-900"
              >
                Login
              </NavLink>
            </div>
            <div className="pb-6">
              <NavLink
                to="/Signup"
                className="text-sm leading-6  text-backgroundwhite hover:text-darkblue"
              >
                Signup
              </NavLink>
            </div>
            <div className="pb-6">
              <NavLink
                to="Contact"
                className="text-sm leading-6  text-backgroundwhite hover:text-darkblue"
              >
                Contact
              </NavLink>
            </div>
          </nav>
          <p className="mt-10 text-center text-xs leading-5  text-backgroundwhite">
            &copy; 2023 Holidaze, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;