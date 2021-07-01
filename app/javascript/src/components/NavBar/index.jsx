import React from "react";

import NavItem from "./NavItem";
import authApi from "apis/auth";
import { resetAuthTokens } from "src/apis/axios.js";
import { getFromLocalStorage } from "helpers/storage";

const NavBar = () => {
  const userFirstName = getFromLocalStorage("authUserFirstName");
  logger.info(userFirstName);

  return (
    <>
      <nav className="bg-white px-2 py-2 border-b-2 border-gray-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <NavItem name="Polly" path="/" />
            </div>
            <div>
              <span
                className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5"
                href="/"
              >
                {userFirstName}
              </span>
              {/* <a className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5 cursor-pointer">
              Logout
            </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
