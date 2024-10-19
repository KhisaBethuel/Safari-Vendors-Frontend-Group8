import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'buyer',
    showPassword: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({ ...prev, showPassword: !prev.showPassword }));
  };

  //password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    //check if password meets criteria
    if (!validatePassword(formData.password)) {
      setPasswordError('Password must be at least 8 characters long and contain at least one number and one special character.');
      setIsLoading(false);
      return;
    } else {
      setPasswordError('');
    }

    try {
      console.log('Form Data:', formData);   //see this
    } catch (error) {
      console.error('Error signing in', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-[#CBE3E5] px-6 py-8 rounded-lg shadow-md w-full max-w-screen-md">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <section className="mb-8 text-center">
          <h1 className="font-irishGrover text-3xl sm:text-4xl font-medium">
            Welcome! 👋
          </h1>
          <p className="text-gray-700 text-md sm:text-lg">
            Fill in your details to proceed!!
          </p>
        </section>

        <div className="flex flex-col gap-2">
              <label className="text-gray-700">Sign up as:</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="buyer"
                    checked={formData.role === 'buyer'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Buyer
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="vendor"
                    checked={formData.role === 'vendor'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Vendor
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="both"
                    checked={formData.role === 'both'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Both
                </label>

              </div>
            </div>

        <div className="relative w-full">
          <FaUser className="absolute top-[50%] left-4 transform -translate-y-1/2 text-black" />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="text-black border px-12 py-3 text-sm rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="relative w-full">
          <MdEmail className="absolute top-[50%] left-4 transform -translate-y-1/2 text-black" />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="text-black border px-12 py-3 text-sm rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
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
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 text-white bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg focus:outline-none transition-opacity ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Logging in...' : 'Sign up'}
        </button>

        <p className="text-center text-gray-700 mt-4">
          Already have an account?
          <Link className="text-blue-500 ml-2" to="/signin">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  </div>
  );
};

export default SignUp;