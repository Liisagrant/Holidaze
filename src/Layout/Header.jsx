import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { isLoggedIn, handleLogout } from '../utils/Auth';
import LogoutBtn from './LogoutBtn';
import ProfileAvatar from './ProfileAvatar';
import { getUserDetails } from '../utils/Auth';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  useEffect(() => {
    if (isLoggedIn()) {
      const userDetails = getUserDetails();
      setUserAvatar(userDetails.avatar);
    }
  }, []);

  const generateNavLinkClass = (isActive) =>
    `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-header font-md text-backgroundwhite hover:text-darkblue ${
      isActive
        ? 'font-bold border-b-2 border-backgroundwhite'
        : 'border-transparent'
    }`;

  return (
    <header className="bg-main fixed top-0 left-0 right-0 z-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-backgroundwhite lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center p-2">
                <Link to="/" class="hidden md:block">
                  <svg
                    width="122"
                    height="36"
                    viewBox="0 0 122 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0411 9.008V26H11.7131V19.376H6.64909V26H1.32109V9.008H6.64909V15.128H11.7131V9.008H17.0411ZM27.7183 26.168C26.1183 26.168 24.6463 25.792 23.3023 25.04C21.9743 24.288 20.9183 23.248 20.1343 21.92C19.3503 20.592 18.9583 19.096 18.9583 17.432C18.9583 15.768 19.3503 14.272 20.1343 12.944C20.9183 11.616 21.9743 10.584 23.3023 9.848C24.6463 9.096 26.1183 8.72 27.7183 8.72C29.3183 8.72 30.7823 9.096 32.1103 9.848C33.4383 10.584 34.4863 11.616 35.2543 12.944C36.0383 14.272 36.4303 15.768 36.4303 17.432C36.4303 19.096 36.0383 20.592 35.2543 21.92C34.4863 23.248 33.4303 24.288 32.0863 25.04C30.7583 25.792 29.3023 26.168 27.7183 26.168ZM27.7183 21.2C28.7743 21.2 29.5903 20.864 30.1663 20.192C30.7423 19.504 31.0303 18.584 31.0303 17.432C31.0303 16.264 30.7423 15.344 30.1663 14.672C29.5903 13.984 28.7743 13.64 27.7183 13.64C26.6463 13.64 25.8223 13.984 25.2463 14.672C24.6703 15.344 24.3823 16.264 24.3823 17.432C24.3823 18.584 24.6703 19.504 25.2463 20.192C25.8223 20.864 26.6463 21.2 27.7183 21.2ZM43.6803 21.968H48.8163V26H38.3523V9.008H43.6803V21.968ZM55.821 9.008V26H50.493V9.008H55.821ZM65.3073 9.008C67.0833 9.008 68.6353 9.368 69.9633 10.088C71.3073 10.808 72.3393 11.808 73.0593 13.088C73.7793 14.368 74.1393 15.824 74.1393 17.456C74.1393 19.072 73.7793 20.528 73.0593 21.824C72.3393 23.12 71.3073 24.144 69.9633 24.896C68.6353 25.632 67.0833 26 65.3073 26H58.2273V9.008H65.3073ZM64.8273 21.248C66.0273 21.248 66.9793 20.92 67.6833 20.264C68.3873 19.608 68.7393 18.672 68.7393 17.456C68.7393 16.24 68.3873 15.304 67.6833 14.648C66.9793 13.992 66.0273 13.664 64.8273 13.664H63.5553V21.248H64.8273ZM86.9593 23.432H81.2953L80.4553 26H74.8633L81.0793 9.008H87.2233L93.4153 26H87.7993L86.9593 23.432ZM85.6633 19.424L84.1273 14.696L82.5913 19.424H85.6633ZM100.53 21.752H107.346V26H94.6258V21.992L101.346 13.232H94.6258V9.008H107.346V13.016L100.53 21.752ZM115.071 13.256V15.344H120.351V19.352H115.071V21.752H121.071V26H109.743V9.008H121.071V13.256H115.071Z"
                      fill="#FBF9F6"
                    />
                  </svg>
                </Link>
                <Link to="/" class="md:hidden">
                  <svg
                    width="47"
                    height="76"
                    viewBox="0 0 47 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.6023 23.68V52H27.7223V40.96H19.2823V52H10.4023V23.68H19.2823V33.88H27.7223V23.68H36.6023Z"
                      fill="#FBF9F6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <SearchBar />
            {isLoggedIn() && <ProfileAvatar avatar={userAvatar} />}
            <div className="relative z-10 flex items-center lg:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
              >
                {isMobileMenuOpen ? (
                  <svg
                    id="x"
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    id="menu"
                    className="block h-6 w-6 text-backgroundwhite"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <nav aria-label="Global">
            <ul className="hidden lg:flex lg:space-x-8 lg:py-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Accommodations"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Accommodations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Profile"
                  className={({ isActive }) => generateNavLinkClass(isActive)}
                >
                  Profile
                </NavLink>
              </li>
              {isLoggedIn() ? (
                <li>
                  <LogoutBtn handleLogout={handleLogout} />
                </li>
              ) : (
                ''
              )}
              {!isLoggedIn() && (
                <>
                  <li>
                    <NavLink
                      to="/Login"
                      className={({ isActive }) =>
                        generateNavLinkClass(isActive)
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Signup"
                      className={({ isActive }) =>
                        generateNavLinkClass(isActive)
                      }
                    >
                      SignUp
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
        <nav
          className={`lg:hidden ${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } justify-center`}
          aria-label="Global"
        >
          <ul className="space-y-1 my-4 px-2 pt-2 pb-3 flex flex-col items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => generateNavLinkClass(isActive)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Accommodations"
                className={({ isActive }) => generateNavLinkClass(isActive)}
              >
                Accomodations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) => generateNavLinkClass(isActive)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Profile"
                className={({ isActive }) => generateNavLinkClass(isActive)}
              >
                Profile
              </NavLink>
            </li>
            {isLoggedIn() ? (
              <li>
                <LogoutBtn handleLogout={handleLogout} />
              </li>
            ) : (
              ''
            )}
            {!isLoggedIn() && (
              <>
                <li>
                  <NavLink
                    to="/Login"
                    className={({ isActive }) => generateNavLinkClass(isActive)}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Signup"
                    className={({ isActive }) => generateNavLinkClass(isActive)}
                  >
                    SignUp
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
