import React, { useState, useEffect } from "react";

const ReviewPage = ({ handleSubmitReview }) => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const fetchVendors = async () => {
        try {
            const response = await fetch("/vendors"); 
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setVendors(data);
        } catch (error) {
            console.error("Error fetching vendors:", error);
        }
        };

        fetchVendors();
    }, []);

    const openPopup = (vendor) => {
        setSelectedVendor(vendor);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedVendor(null);
        setRating(1);
        setReviewText("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedVendor) {
        handleSubmitReview(selectedVendor.id, { rating, reviewText });
        }
        closePopup();
    };

    return (
        <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Vendor Reviews</h2>
        <div className="space-y-4">
            {vendors.length > 0 ? (
            vendors.map((vendor) => (
                <div key={vendor.id} className="p-4 border rounded-lg shadow">
                <h3 className="text-xl font-semibold">{vendor.name}</h3>
                <p className="text-gray-600">
                    Rating: {vendor.rating || "No ratings yet"} ★
                </p>
                <button
                    onClick={() => openPopup(vendor)}
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Add Comment
                </button>
                </div>
            ))
            ) : (
            <p className="text-gray-500">No vendors available for review.</p>
            )}
        </div>

        {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h3 className="text-lg font-bold mb-4">
                Rate and Review {selectedVendor?.name}
                </h3>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                    Rating:
                    </label>
                    <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="block w-full border rounded-md p-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>
                        {star} Star{star > 1 ? "s" : ""}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                    Comment:
                    </label>
                    <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    className="block w-full border rounded-md p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="mr-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                    Submit
                </button>
                <button
                    type="button"
                    onClick={closePopup}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Cancel
                </button>
                </form>
            </div>
            </div>
        )}
        </div>
    );
    };

export default ReviewPage;
