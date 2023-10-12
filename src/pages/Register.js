import React from "react";
import carBackground from "../Assets/car-background.jpg";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/action/userActions";

const Register = () => {
  const dispatch = useDispatch();

  function onFinish(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });

    dispatch(userRegister(values));
    console.log(values);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${carBackground})`, // Use your car image as background
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={onFinish}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
