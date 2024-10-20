import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log('Form Data:', formData); 
    } catch (error) {
      console.error('Error signing in', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#CBE3E5] px-6 py-8 sm:px-10 sm:py-12 rounded-lg shadow-md w-full max-w-screen-md">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <section className="mb-8 text-center">
            <h1 className="font-irishGrover text-3xl sm:text-4xl font-medium">
              Welcome! 👋
            </h1>
            <p className="text-gray-700 text-md sm:text-lg">
              Fill in your details to proceed!!
            </p>
          </section>

          <div className="relative w-full">
            <MdEmail className="absolute top-[50%] left-4 transform -translate-y-1/2 text-black" />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="text-black border px-12 py-3 text-sm rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
              aria-label="Email"
            />
          </div>

          <div className="relative w-full">
            <FaLock className="absolute top-[50%] left-4 transform -translate-y-1/2 text-black" />
            <input
              type={formData.showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              className="text-black border px-12 py-3 text-sm rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
              aria-label="Password"
            />
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {formData.showPassword ? (
                <FaEyeSlash className="text-black text-lg" />
              ) : (
                <FaEye className="text-black text-lg" />
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-white bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg focus:outline-none transition-opacity ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Logging in...' : 'Sign in'}
          </button>

          <p className="text-center text-gray-700 mt-4">
            Don't have an account?
            <Link className="text-blue-500 ml-2" to="/signup">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;