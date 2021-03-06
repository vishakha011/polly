import React from "react";
import { Link } from "react-router-dom";
import { either, isNil, isEmpty } from "ramda";

import NavItem from "./NavItem";
import authApi from "apis/auth";
import { resetAuthTokens } from "src/apis/axios.js";
import { getFromLocalStorage, setToLocalStorage } from "helpers/storage";

const NavBar = () => {
  const userFirstName = getFromLocalStorage("authUserFirstName");

  const handleLogout = async () => {
    try {
      await authApi.logout();
      setToLocalStorage({
        authToken: null,
        email: null,
        userId: null,
        userFirstName: null,
      });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <>
      <nav className="bg-white px-2 py-2 border-b-2 border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <NavItem name="Polly" path="/" />
            </div>
            <div>
              {!either(isNil, isEmpty)(userFirstName) &&
              userFirstName !== "null" &&
              userFirstName !== "undefined" ? (
                  <>
                    <span
                      className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5"
                      href="/"
                    >
                      {userFirstName}
                    </span>
                    <a
                      className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5 cursor-pointer"
                      onClick={handleLogout}
                    >
                    Logout
                    </a>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5 cursor-pointer"
                  >
                  Login
                  </Link>
                )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
