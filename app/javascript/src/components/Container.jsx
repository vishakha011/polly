import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex h-full">
          <div className="bg-white border shadow-md mx-auto mt-12 md-8 w-3/4 px-2 py-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
