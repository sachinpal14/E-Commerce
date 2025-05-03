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
    
    <div className="min-h-screen bg-gradient-to-br flex-col from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <form className="bg-white p-8 flex flex-col rounded-2xl shadow-xl w-full max-w-sm animate-fade-in">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Secure Login
        </h2>
         
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        <button
  onClick={handleLogin}
  className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg transition-all duration-300 hover:bg-black active:scale-90 active:duration-150"
>
  Login
</button>

      </form>
    </div>
    </>
  );
};

export default Login;
