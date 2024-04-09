import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="transition duration-300 ease-in-out transform rounded-md text-slate-900 bold hover:bg-blue-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
