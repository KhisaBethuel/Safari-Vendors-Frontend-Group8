import React from "react";

function VendorCard({ product, onEdit, onDelete}) {

    return (
        <div className="container py-8 px-4 mx-auto bg-[#CBE3E5] p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
            />
        <div className="items-center text-center font-serif Jacques Francois text-xl">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
        </h3>
        <p className="text-black">{product.category}</p>
        <p className="text-black">ksh {product.price}</p>
        </div>
    <div className="flex space-x-10 ml-8 py-8" >
            <button 
            className="bg-white text-black px-4 py-2 w-36 rounded shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            onClick={() => onEdit()}
            >
                Edit
                    </button>
                    <button
                    className="bg-red-500 text-white px-4 py-2 w-36 rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                    onClick={() => onDelete(product.id)}
                    >
            Delete
            </button>
        </div>
        </div>

    );
}

export default VendorCard;