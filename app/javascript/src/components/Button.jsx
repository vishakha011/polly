import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", buttonText, onClick, loading }) => {
  return (
    <div className="mt-6">
      <button
        className="flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-300 ease-in-out border border-transparent rounded-md group hover:bg-opacity-90 focus:outline-none bg-indigo-500"
        type={type}
        onClick={onclick}
      >
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
