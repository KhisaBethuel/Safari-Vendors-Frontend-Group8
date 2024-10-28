import React from "react";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-center">Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your Cart Is Empty</p>
      ) : (
        <>
          <table className="font-serif border-collapse w-full border text-center py-2">
            <thead>
              <tr>
                <th className="text-left py-2 font-bold p-2 border">Image</th>
                <th className="text-left py-2 font-bold p-2 border">Name</th>
                <th className="text-left py-2 font-bold p-2 border">
                  Category
                </th>
                <th className="text-left py-2 font-bold p-2 border">Vendor</th>
                <th className="text-left py-2 font-bold p-2 border">Price</th>
                <th className="text-left py-2 font-bold p-2 border">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItems key={item.id} item={item} />
              ))}
            </tbody>
          </table>
          <div className="text-right font-bold text-xl mt-4">
            Total Price: Sh {totalPrice.toFixed(2)}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold">
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
