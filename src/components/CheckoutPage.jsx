import React from "react";

const CheckoutPage = ({ cartItems }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a backend
    alert("Order submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="flex flex-col space-y-4">
        <p className="text-xl font-medium">Total Amount: Ksh {cartItems?.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Pickup Point"
            required
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Phone Number"
            required
            className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
