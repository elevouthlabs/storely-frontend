import { useState } from "react";
import { useNavigate } from "react-router-dom";

import heart from "../../assets/heart.svg";
import filter from "../../assets/filter.png";

import StoreHeader from "../components/StoreHead";
import StoreNavbar from "../components/StoreNavbar";

const MobileStorefront = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Men", "Women", "Kids"];

    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4.5,
            reviews: 128,
            badge: "BESTSELLER",
            image: "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Headphones"
        },
        {
            id: 2,
            name: "Classic Leather Jacket",
            price: 189.99,
            originalPrice: 249.99,
            rating: 4.8,
            reviews: 89,
            badge: "NEW",
            image: "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Jacket"
        },
        {
            id: 3,
            name: "Smart Watch Pro",
            price: 349.99,
            originalPrice: 449.99,
            rating: 4.6,
            reviews: 156,
            badge: "LIMITED",
            image: "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Watch"
        },
        {
            id: 4,
            name: "Designer Sunglasses",
            price: 129.99,
            originalPrice: 179.99,
            rating: 4.7,
            reviews: 203,
            badge: "TRENDING",
            image: "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Sunglasses"
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className="text-yellow-400">★</span>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="text-yellow-400">☆</span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300">★</span>
                );
            }
        }

        return stars;
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/store/category/${category.toLowerCase()}`)
    };

    return (
        <div className="min-h-screen bg-gray-50 max-w-md mx-auto pb-20">
            <StoreHeader />

            {/* Hero Banner */}
            <div className="relative h-[206px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/sto.png')" }}
                ></div>

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative text-white p-6 text-center flex flex-col items-center">
                    <p className="text-white text-base font-normal leading-[22px] text-center mb-2">
                        ⭐ Trusted by 200+ customers
                    </p>

                    <h2 className="text-xl mb-4 opacity-90">
                        Luxury Fashion wears for Modern Men and Women
                    </h2>

                    <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Categories */}
            <div className="px-4 mt-4">
                <div className="flex gap-3 overflow-x-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Filter Bar */}
            <div className="px-4 mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                    Products
                </h3>

                <button className="flex items-center gap-2 text-sm text-gray-600">
                    <img src={filter} alt="filter" className="w-4 h-4" />
                    Filter
                </button>
            </div>

            {/* Products */}
            <div className="px-4 pb-6">
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover"
                                />

                                <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                                    <img src={heart} alt="favorite" className="w-4 h-4" />
                                </button>

                                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                    {product.badge}
                                </span>
                            </div>

                            <div className="p-3">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                    {product.name}
                                </h4>

                                <div className="flex items-center gap-1 mb-2">
                                    <div className="flex">
                                        {renderStars(product.rating)}
                                    </div>

                                    <span className="text-xs text-gray-500">
                                        ({product.reviews})
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-base font-bold text-gray-900">
                                        ${product.price}
                                    </span>

                                    <span className="text-sm text-gray-400 line-through">
                                        ${product.originalPrice}
                                    </span>
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

export default MobileStorefront;