import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

const storedHash =
  "$2a$12$LxNV2e2gNKt6DohUm5oVGegc.83Y9h5laJysVz20XWJ7Oq0OpPxYi"; // bcrypt hash of "owner123"

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    event.preventDefault();
    if (bcrypt.compareSync(password, storedHash)) {
      localStorage.setItem("owner_logged_in", "true");
      navigate("/");
    } else if (!password.length > 0) {
      setError(true);
      setErrorMessage("Please enter a password.");
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 3000);
    } else {
      setError(true);
      setErrorMessage("Incorrect password. Please try again.!!!!");
      setTimeout(() => {
        setError(false);
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <fieldset className="w-[90%] md:w-[50%] h-[80%] p-5 border-2 flex items-center flex-col justify-center bg-gradient-to-r from-[#f5f5f5] to-[#e0e0e0] rounded-lg ">
          <legend className="text-5xl ml-[10%]">Login Here</legend>
          <form className="flex flex-col items-center justify-center ">
            <h1 className="text-4xl mb-4">Owner Login</h1>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="p-2 w-96 border border-black rounded-md outline-none focus:shadow-[2px_2px_2px_rgba(5,10,25,1)] transition-all duration-300 mb-4"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer text-xl font-semibold hover:bg-gray-700 w-96 hover:text-black transition duration-300 active:scale-90 active:bg-green-400 active:text-black"
            >
              Login
            </button>
          </form>
          {error && (
            <div className="text-red-500 mt-4 text-lg font-semibold">
              {errorMessage}
            </div>
          )}
        </fieldset>
      </div>
    </>
  );
};

export default Login;
