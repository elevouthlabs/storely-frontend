import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import StoreHeader from "../components/StoreHead.jsx";
import StoreNavbar from "../components/StoreNavbar.jsx";

const CategoryPage = () => {
    const navigate = useNavigate();
    const { categoryName } = useParams();

    const [sort, setSort] = useState("popular");

    const { addToCart } = useCart();

    const productsData = {
        shoes: [
            {
                id: 1,
                name: "Classic Sneakers",
                price: 15000,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 2,
                name: "Formal Shoes",
                price: 28000,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 3,
                name: "Sports Sneakers",
                price: 22000,
                rating: 4.7,
                image:
                    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop"
            }
        ],

        clothing: [
            {
                id: 4,
                name: "Elegant Dress",
                price: 25000,
                rating: 4.9,
                image:
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 5,
                name: "Summer T-Shirt",
                price: 5500,
                rating: 4.5,
                image:
                    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 6,
                name: "Denim Jeans",
                price: 12000,
                rating: 4.6,
                image:
                    "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop"
            }
        ],

        accessories: [
            {
                id: 7,
                name: "Gold Necklace",
                price: 8500,
                rating: 4.8,
                image:
                    "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
            },
            {
                id: 8,
                name: "Sunglasses",
                price: 6000,
                rating: 4.4,
                image:
                    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
            }
        ],

        bags: [
            {
                id: 9,
                name: "Leather Handbag",
                price: 35000,
                rating: 4.7,
                image:
                    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
            }
        ]
    };

    const products = productsData[categoryName] || [];

    const formattedTitle =
        categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    return (
        <div className="min-h-screen bg-[#F5F5F5] max-w-md mx-auto pb-20">
            <StoreHeader />

            <div className="px-4 pt-4">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-[22px] font-bold text-[#111827]">
                        {formattedTitle}
                    </h2>

                    <p className="text-[13px] text-[#6B7280] mt-1">
                        {products.length} items
                    </p>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-5">
                    <button className="flex-1 bg-white border border-[#E5E7EB] rounded-[10px] px-3 py-2 text-[14px] text-[#374151] flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6 6V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.414l-6-6A1 1 0 013 6.586V4z"
                            />
                        </svg>

                        Filters
                    </button>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="flex-1 bg-white border border-[#E5E7EB] rounded-[10px] px-3 py-2 text-[14px] text-[#374151] outline-none"
                    >
                        <option value="popular">Sort By</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[14px] overflow-hidden shadow-sm"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[140px] object-cover"
                                />

                                <button
                                    onClick={() => addToCart(product)}
                                    className="absolute bottom-2 right-2 bg-[#6D28D9] w-7 h-7 rounded-full flex items-center justify-center text-white text-lg"
                                >
                                    +
                                </button>
                            </div>

                            <div className="p-2">
                                <h3 className="text-[13px] font-medium text-[#111827] line-clamp-1">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-500 text-[12px]">
                                        ★
                                    </span>

                                    <span className="text-[11px] text-[#6B7280]">
                                        {product.rating}
                                    </span>
                                </div>

                                <div className="mt-1 flex items-center justify-between">
                                    <p className="text-sm text-gray-600 mb-3">
                                        ₦{product.price.toLocaleString()}
                                    </p>

                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-[#6D28D9] text-white w-6 h-6 rounded-md text-sm flex items-center justify-center"
                                    >
                                        🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <StoreNavbar />
        </div>
    );
};

export default CategoryPage;
