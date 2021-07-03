import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  buttonText,
  onClick,
  path = "",
  iconClass,
  loading,
  result = false,
}) => {
  if (type === "link") {
    return (
      <>
        <div className="mt-6">
          <Link
            to={path}
            className="flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-300 ease-in-out border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none bg-indigo-500"
          >
            {iconClass ? <i className={`${iconClass} text-xl pr-1`}></i> : " "}
            {buttonText}
          </Link>
        </div>
      </>
    );
  }

  if (result) {
    return (
      <div>
        <p className="text-center text-base text-indigo-500">
          Thanks for voting!
        </p>
        <p className="text-center text-base">🎉</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <button
        className="flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-300 ease-in-out border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none bg-indigo-500"
        type={type}
        onClick={onClick}
      >
        {iconClass ? (
          <i className={`${iconClass} text-2xl pr-1 align-middle`}></i>
        ) : (
          " "
        )}
        {loading ? "Loading..." : buttonText}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
