import React from "react";

function VendorCard({ product, onEdit, onDelete}) {

    return (
        <div className="contain py-4 px-4 mx-auto bg-[#CBE3E5] p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex justify-between items-center">
            <div className="flex items-center">
            <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
            />
            </div>
        <div className="text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {product.name}
        </h3>
        <p className="text-black">ksh {product.price}</p>
        </div>
        <div className="flex space-x-2">
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => onEdit()}
            >
                Edit
                    </button>
                    <button
                    className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={() => onDelete(product.id)}
                    >
            Delete
            </button>
        </div>
        </div>

    );
}

export default VendorCard;