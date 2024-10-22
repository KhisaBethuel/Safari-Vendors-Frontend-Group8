import React, {useState} from 'react'
import Modal from './AddProductBtn';
    
function AddProduct() {
    const [name,setName] =useState("");
    const [price,setPrice] = useState("");
    const [image, setImage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { name, price: parseFloat(price), image };
        
        try {
            const response = await fetch('    fetch("https://safarivendors-backend.vercel.app/products")', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        setName("");
        setPrice("");
        setImage("");
        setIsModalOpen(false);

    } catch (error) {
        console.error('Error adding product:', error);
    }
};

    return (
        <div>
            <div>
                <button onClick={() => setIsModalOpen(true)} className="bg-green-500 w-36 h-10 hover:bg-green-600 ">Add Product</button>
            </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h1 className='font-irishGrover font-bold text-5xl text-center'>Add Product</h1>
            <form onSubmit={handleSubmit} className="mb-6 flex flex-col p-20 items-center">
                <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border p-2 rounded-md mr-2"
                />
                <input
                type="text"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="border p-2 rounded-md mr-2 mt-4"
                />
                <input
                type="text"
                placeholder="Product Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="border p-2 rounded-md mr-2 mt-4 "
                />
                <button type="submit" className='bg-green-500 w-28 h-10 mt-6 rounded-lg '>Add</button>
            </form>
        </Modal >
    </div>
  )
}
export default AddProduct;