import React, {useState, useEffect} from "react";
import VendorCard from "./VendorCard";

const VendorPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [name,setName] =useState("");
    const [price,setPrice] = useState("");
    const [image, setImage] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editProductId, setEditProductId] = useState(null);


      // Fetch products from the API
    const fetchProducts = async () => {
        const response = await fetch("https://safarivendors-backend.vercel.app/products/");
        const data = await response.json();
        console.log("Fetched Products:", data); 
        setProducts(data);
        setFilteredProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { name, price: parseFloat(price), image};

        if (editMode) {
            await fetch(`https://safarivendors-backend.vercel.app/products/${editProductId}`,{
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringfy(productData),
            });
            setEditMode(false);
            setEditProductId(null)
        }else {
            await fetch("https://safarivendors-backend.vercel.app/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),

            });

            
        }
        setName("")
        setPrice("")
        setImage("")
        fetchProducts();
        };

    const handleEdit = (product)  => {
        setEditMode(true);
        setEditProductId(product.id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
    };
    
    const handleDelete = async (id) => {
        await fetch(`https://safarivendors-backend.vercel.app/products/${id}`,{
            method:"DELETE",
        });
        fetchProducts();
    };

    useEffect(() => {
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    return (
        <div className="bg-white mb-2">
        <div className="flex justify-center items-center mb-10 mt-3">
            <input
                type="text"
                placeholder="Search for Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="align-center mt-3 rounded-lg h-10 w-80 p-2 text-black"
            />
        </div>

        <h1 className="text-center text-2xl mb-6">Vendor Dashboard</h1>
        <form onSubmit={handleSubmit} className="mb-6">
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
                className="border p-2 rounded-md mr-2"
            />
            <input
                type="text"
                placeholder="Product Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                className="border p-2 rounded-md mr-2"
            />
<button type="submit">{editMode ? "Update Product" : "Add Product"}</button>
</form>
<h2 className="text-center text-xl mb-4">Your Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pl-20 pr-20">
                {filteredProducts.map((product) => (
                    <VendorCard
                        key={product.id}
                        product={product}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
                </div>
            </div>
        );
    };
export default VendorPage;
