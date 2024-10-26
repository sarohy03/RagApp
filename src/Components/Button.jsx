import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, className }) {
  return (
    <button
      className={`shadow-xl hover:shadow
      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300
      px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-white bg-[#011627ff] rounded-lg
      shadow-2xl hover:text-white text-sm sm:text-base md:text-lg lg:text-xl ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
