import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent"

const LayoutAuthentication = ({ children, heading = "",className }) => {
 
  return (
    <div className="w-full bg-lite min-h-screen p-10 relative isolate dark:bg-darkbg">
      <img
        src="./bg.png"
        alt="bg"
        className="absolute w-full max-h-[50%] pointer-events-none bottom-0 right-0 left-0 z-[-1] "
      />
      <Link to={"/"} className="inline-block mb-5 lg:mb-10">
        <img srcSet="./Logo.png 2x" alt="logo" />
      </Link>
      <div className="bg-white max-w-[556px] mx-auto px-5 py-8 lg:px-16 lg:py-12 rounded-lg dark:bg-darkSecondary">
        <h1 className={`text-text1 font-semibold text-lg lg:text-xl mb-1 lg:mb-3 dark:text-white  ${className?className:"text-center"}`}>
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponent,
});
