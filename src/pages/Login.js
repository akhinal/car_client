import React from "react";
import carBackground from "../Assets/car-background.jpg";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/action/userActions";

const Login = () => {
  const dispatch = useDispatch();

  function onFinish(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);
    const values = {};
    formData.forEach((value, key) => {
      values[key] = value;
    });
    
    dispatch(userLogin(values));
    console.log(values);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${carBackground})`, // Use your car image as background
      }}
    >
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={onFinish}>
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
              Login
            </button>
          </div>
        </form>
        <p className="text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
