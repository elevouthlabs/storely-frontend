import { useState } from "react";
import { useNavigate } from "react-router-dom";

import heart from "../../assets/heart.svg";
import filter from "../../assets/filter.png";

import StoreHeader from "../components/StoreHead";
import StoreNavbar from "../components/StoreNavbar";

const MobileStorefront = () => {
    const navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState("All");

    const topCategories = ["All", "Men", "Women", "Kids"];

    const featuredCollections = [
        {
            title: "NEW ARRIVALS",
            products: "24 products",
            bg: "from-[#12041e] to-[#321047]",
        },
        {
            title: "BEST SELLERS",
            products: "24 products",
            bg: "from-[#6815a3] to-[#9d4edd]",
        },
    ];

    const shopCategories = [
        {
            name: "Shoes",
            items: "24 items",
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Clothing",
            items: "48 items",
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Bags",
            items: "18 items",
            image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Accessories",
            items: "15 items",
            image:
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
            rating: 4.5,
            reviews: 128,
            badge: "BESTSELLER",
            image:
                "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Headphones",
        },
        {
            id: 2,
            name: "Classic Leather Jacket",
            price: 189.99,
            originalPrice: 249.99,
            rating: 4.8,
            reviews: 89,
            badge: "NEW",
            image:
                "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Jacket",
        },
        {
            id: 3,
            name: "Smart Watch Pro",
            price: 349.99,
            originalPrice: 449.99,
            rating: 4.6,
            reviews: 156,
            badge: "LIMITED",
            image:
                "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Watch",
        },
        {
            id: 4,
            name: "Designer Sunglasses",
            price: 129.99,
            originalPrice: 179.99,
            rating: 4.7,
            reviews: 203,
            badge: "TRENDING",
            image:
                "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Sunglasses",
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <span key={i} className="text-yellow-400">
                        ★
                    </span>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <span key={i} className="text-yellow-400">
                        ☆
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="text-gray-300">
                        ★
                    </span>
                );
            }
        }

        return stars;
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/store/category/${category.toLowerCase()}`);
    };

    return (
        <div className="min-h-screen bg-[#f6f6f6] max-w-md mx-auto pb-24">
            <StoreHeader />

            {/* HERO */}
            <div className="relative h-[206px] flex items-center justify-center overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/sto.png')",
                    }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
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

            {/* FEATURED */}
            <div className="px-3">
                <div className="flex items-center justify-between mt-6 mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        Featured Collections
                    </h3>

                    <span className="text-[13px] font-semibold text-[#6a0dad]">
                        See All →
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {featuredCollections.map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-3xl h-[115px] bg-gradient-to-br ${item.bg} p-4 flex flex-col justify-end`}
                        >
                            <div className="absolute -top-5 -right-5 w-[70px] h-[70px] rounded-full bg-white/10"></div>

                            <p className="text-[12px] text-white font-semibold mb-1">
                                {item.title}
                            </p>

                            <h4 className="text-white text-[20px] font-bold">
                                {item.products}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* SHOP CATEGORIES */}
            {/* SHOP CATEGORIES */}
            <div className="px-3">
                <div className="flex items-center justify-between mt-6 mb-4">
                    <h3 className="text-[18px] font-semibold text-[#222]">
                        Shop by Category
                    </h3>

                    <button
                        onClick={() => navigate("/store/categories")}
                        className="text-[13px] font-semibold text-[#6a0dad]"
                    >
                        See All →
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {shopCategories.map((item, index) => (
                        <div
                            key={index}
                            onClick={() =>
                                navigate(`/store/category/${item.name.toLowerCase()}`)
                            }
                            className="relative h-[185px] rounded-3xl overflow-hidden cursor-pointer active:scale-[0.98] transition"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/10 flex flex-col justify-end p-4">
                                <h4 className="text-white text-[20px] font-bold">
                                    {item.name}
                                </h4>

                                <p className="text-white text-[13px]">
                                    {item.items}
                                </p>
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