import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    Clock3,
    ChevronDown,
    X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StoreNavbar from "../components/StoreNavbar.jsx";

const SearchPage = () => {
    const navigate = useNavigate();

    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const searches = ["Wireless headphones", "Sneakers", "Watch"];

    const products = [
        {
            id: 1,
            name: "Block Heel Sandals",
            subtitle: "Shoes • 3 sizes",
            category: "Shoes",
            price: "₦28,000",
            image:
                "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 2,
            name: "Classic Wrist Watch",
            subtitle: "Accessories • Premium",
            category: "Accessories",
            price: "₦18,000",
            image:
                "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 3,
            name: "Leather Hand Bag",
            subtitle: "Bag • Luxury",
            category: "Bag",
            price: "₦35,000",
            image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const categories = [
        "All",
        "Shoes",
        "Clothing",
        "Accessories",
        "Bag",
    ];

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-[430px] mx-auto min-h-screen bg-[#f5f5f5] relative overflow-hidden">
            {/* CONTENT */}
            <div className="px-4 pt-4 pb-24">
                {/* SEARCH */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-[48px] bg-white rounded-xl border border-[#ececec] px-4 flex items-center gap-3">
                        <Search size={16} className="text-[#999]" />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search products..."
                            className="flex-1 outline-none text-[13px] text-[#333] placeholder:text-[#b3b3b3] bg-transparent"
                        />
                    </div>

                    <button
                        onClick={() => setShowFilter(true)}
                        className="w-[48px] h-[48px] rounded-xl border border-[#ececec] bg-white flex items-center justify-center"
                    >
                        <SlidersHorizontal
                            size={18}
                            className="text-[#333]"
                        />
                    </button>
                </div>

                {/* POPULAR SEARCHES */}
                <div className="mb-6">
                    <h3 className="text-[18px] font-semibold text-[#222] mb-4">
                        Popular searches
                    </h3>

                    <div className="space-y-3">
                        {searches.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSearchTerm(item)}
                                className="flex items-center gap-3"
                            >
                                <Clock3
                                    size={15}
                                    className="text-[#666]"
                                />

                                <p className="text-[14px] text-[#555]">
                                    {item}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* POPULAR PRODUCTS */}
                <div>
                    <h3 className="text-[18px] font-semibold text-[#222] mb-4">
                        Popular Products
                    </h3>

                    {filteredProducts.length === 0 ? (
                        <div className="bg-white rounded-2xl py-10 text-center">
                            <p className="text-sm text-gray-500">
                                No products found
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() =>
                                        navigate(
                                            `/store/product/${product.id}`
                                        )
                                    }
                                    className="bg-white rounded-2xl p-3 flex items-center justify-between cursor-pointer active:scale-[0.98] transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-[58px] h-[58px] rounded-xl object-cover"
                                        />

                                        <div>
                                            <h4 className="text-[14px] font-semibold text-[#222]">
                                                {product.name}
                                            </h4>

                                            <p className="text-[12px] text-[#888] mt-1">
                                                {product.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-[14px] font-bold text-[#5f0db3]">
                                        {product.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* FILTER MODAL */}
            {showFilter && (
                <>
                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 z-40"></div>

                    {/* SHEET */}
                    <div className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-[30px] px-5 pt-5 pb-6">
                        {/* TOP */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-[22px] font-semibold text-[#222]">
                                Filters & Sort
                            </h2>

                            <button onClick={() => setShowFilter(false)}>
                                <X size={20} className="text-[#888]" />
                            </button>
                        </div>

                        {/* SORT */}
                        <div className="mb-5">
                            <h4 className="text-[15px] font-semibold text-[#222] mb-3">
                                Sort by
                            </h4>

                            <button className="w-full h-[48px] rounded-xl bg-[#f5f5f5] px-4 flex items-center justify-between text-[14px] text-[#333]">
                                Relevance

                                <ChevronDown size={18} />
                            </button>
                        </div>

                        {/* CATEGORY */}
                        <div className="mb-6">
                            <h4 className="text-[15px] font-semibold text-[#222] mb-3">
                                Category
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {categories.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setSelectedCategory(item);

                                            if (item !== "All") {
                                                navigate(
                                                    `/store/category/${item.toLowerCase()}`
                                                );
                                            }
                                        }}
                                        className={`px-4 h-[34px] rounded-full text-[13px] font-medium transition-all ${selectedCategory === item
                                                ? "bg-[#6a0dad] text-white"
                                                : "bg-[#f3eefb] text-[#6a0dad]"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* PRICE */}
                        <div className="mb-8">
                            <h4 className="text-[15px] font-semibold text-[#222] mb-4">
                                Price Range
                            </h4>

                            <div className="relative h-[4px] bg-[#ececec] rounded-full">
                                <div className="absolute left-0 right-0 h-[4px] bg-[#6a0dad] rounded-full"></div>

                                <div className="absolute -top-[6px] left-0 w-[16px] h-[16px] rounded-full bg-[#6a0dad]"></div>

                                <div className="absolute -top-[6px] right-0 w-[16px] h-[16px] rounded-full bg-[#6a0dad]"></div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <p className="text-[13px] font-semibold text-[#6a0dad]">
                                    ₦0
                                </p>

                                <p className="text-[13px] font-semibold text-[#6a0dad]">
                                    ₦100,000
                                </p>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSearchTerm("");
                                }}
                                className="flex-1 h-[52px] rounded-xl border border-[#e5e5e5] text-[15px] font-medium text-[#444]"
                            >
                                Reset
                            </button>

                            <button
                                onClick={() => setShowFilter(false)}
                                className="flex-1 h-[52px] rounded-xl bg-[#5f0db3] text-white text-[15px] font-semibold"
                            >
                                Show {filteredProducts.length} results
                            </button>
                        </div>
                    </div>
                </>
            )}

            <StoreNavbar />
        </div>
    );
};

export default SearchPage;