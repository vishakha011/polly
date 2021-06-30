import React from "react";

// import authApi from "apis/auth";
// import { resetAuthTokens } from "src/apis/axios.js";
// import { getFromLocalStorage, setToLocalStorage } from "helpers/storage";

const NavBar = () => {
  // const userName = getFromLocalStorage("authUserName")

  return (
    <nav className="bg-white px-2 py-2 border-b-2 border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-mono text-3xl font-bold cursor-pointer">
              <a className="cursor-pointer" href="/">
                Polly
              </a>
            </h1>
          </div>
          <div>
            <a
              className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5"
              href="/"
            >
              username
            </a>
            <a className="inline-flex items-center px-1 mr-3 font-semibold text-lg leading-5 cursor-pointer">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
