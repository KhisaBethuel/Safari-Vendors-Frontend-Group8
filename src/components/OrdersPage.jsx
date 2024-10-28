import React from "react";

function OrdersPage({ cartItems }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
      <ul className="list-disc list-inside space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <span>{item.name} (x{item.quantity})</span>
            <span>Ksh {item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right font-bold">
        Total Amount: Ksh {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
    </div>
  );
}

export default OrdersPage;
