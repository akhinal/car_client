


import React, { useState } from "react";

const DefaultLayout = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="header fixed top-0 left-0 right-0 bg-black w-full items-center h-[80px] z-50">
        <div className="flex w-full items-center justify-between p-3">
          <h1 className="font-bold text-2xl text-orange-600">Car Rental</h1>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="border-2 border-blue-500 rounded-md font-semibold text-lg text-white bg-blue-500 px-4 py-2 hover:bg-blue-600"
            >
              {users.name}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
                {/* Dropdown content goes here */}
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Bookings</a>
                  </li>
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.href = "/login";
                    }}
                  >
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-16 w-ful ">
        {props.children}
      </div>
    </div>
  );
};

export default DefaultLayout; 
