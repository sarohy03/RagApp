import React from "react";
import Navbar from "../../Components/Navbar"; // Importing the Navbar component
import { Circle } from "react-awesome-shapes"; // Importing the Circle component for background design
import Button from "../../Components/Button"; // Importing a custom Button component

function SignupPage() {
  return (
    // Main container for the signup page
    <div className="bg-slate-200 z-0 m-0 box-border overflow-hidden">
      <Navbar /> {/* Rendering the Navbar component */}
      {/* Animated section for the Circle background */}
      <div className="animate-moveToRight">
        <div className="relative">
          <Circle
            size={"60em"} // Setting the size of the Circle
            zIndex="2" // Setting z-index to ensure proper layering
            color="linear-gradient(to right, #1e40af, #0f305d)" // Setting gradient color for the Circle
          />
        </div>
      </div>
      {/* Main content area containing the sign-up and login sections */}
      <div className="flex z-10 relative w-full mt-[10%]">
        {/* Left section for sign-up prompt */}
        <div className="hidden sm:flex flex-1 p-4 items-center justify-center">
          <div className="flex flex-col items-center justify-center p-5 bg-slate-200 rounded-3xl shadow-2xl animate-fadeIn">
            <h1 className="text-4xl md:text-7xl font-bold font-mono text-center">
              New here?
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold">
              Welcome to the crib
            </p>
            {/* Sign-up button */}
            <Button
              label="Sign up"
              className="font-extrabold hover:bg-[#0f305d] mt-[2em]"
            />
          </div>
        </div>

        {/* Right section for signup form */}
        <div className="flex-1 p-4 flex items-center justify-center animate-fadeIn">
          {/* Card container with increased size and rounded edges */}
          <form className="bg-[linear-gradient(to_right,#1e40af,#0f305d)] p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">
              Sign Up
            </h2>

            {/* Username input field */}
            <div className="mb-5">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                required // Making the field required
              />
            </div>

            {/* Email input field */}
            <div className="mb-5">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                required // Making the field required
              />
            </div>

            {/* Password input field */}
            <div className="mb-8">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                required // Making the field required
              />
            </div>

            {/* Confirm Password input field */}
            <div className="mb-8">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                required // Making the field required
              />
            </div>

            {/* Submit button and already have an account link */}
            <div className="flex items-center justify-between">
              <Button
                type="submit" // Specify button type for forms
                label="Sign Up"
                className="bg-blue-700 hover:bg-[#011627ff] font-extrabold text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              />
              <a
                className="inline-block align-baseline font-bold text-sm text-gray-200 hover:text-gray-300"
                href="/login" // Linking to the login page
              >
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage; // Exporting the SignupPage component for use in other parts of the application
