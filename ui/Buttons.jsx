'use client';

import React, { forwardRef } from "react";
import PropTypes from 'prop-types';


const Button = forwardRef(
  (
    {
      children,
      className,
      'aria-label': ariaLabel,
      type = 'button',
      'aria-pressed': ariaPressed,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        type={type}
        role="button"
        aria-pressed={ariaPressed}
        className={`
        px-8 py-2 rounded-xl bg-purple-500 
        text-white font-semibold backdrop-blur-md
        transition-all duration-300 ease-in-out
        hover:scale-105 i
        focus:outline-none
        ${className}
      `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; // Optional but helpful for debugging in React DevTools

// Add PropTypes for Button component
// This helps catch bugs by validating the types of props at runtime
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;