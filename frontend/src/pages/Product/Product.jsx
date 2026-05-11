import { useState, useEffect } from "react";
import StatsCards from "../../components/StatsCards/StatsCards.jsx";
import EmptyState from "../../components/EmptyState/EmptyState.jsx";
import ProductTable from "../../components/ProductTable/ProductTable.jsx";
import ProductGrid from "../../components/ProductGrid/ProductGrid.jsx";
import filter from "../../assets/filter.png";
import bulk from "../../assets/bulk.png";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";
import block from "../../assets/block.png";
import { useNavigate } from "react-router-dom";
import { ProductsRequests } from "../../api/axios";

const Product = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState("table"); // "table" or "grid"

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        try {
            setLoading(true);
            const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');
            setProducts(storedProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    const getFilteredProducts = () => {
        switch (activeTab) {
            case "Active":
                return products.filter(p => p.status === 'active');
            case "Low Stock":
                return products.filter(p => p.stock <= 10 && p.stock > 0);
            case "Out":
                return products.filter(p => p.stock === 0);
            default:
                return products;
        }
    };

    const filteredProducts = getFilteredProducts();

    const tabs = ["All", "Active", "Low Stock", "Out"];

    return (
        <>
            <div className="flex justify-between items-center mt-">
                <div>
                    <h1 className="font-Inter font-medium text-[24px] leading-[32px] tracking-[0.07px] text-[#1A1A1A]">Products Management</h1>
                    <p className="font-Inter font-normal text-base text-[#B3B3B3] leading-6 tracking-[-0.31px]">
                        Manage your product catalog
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="w-[129px] flex items-center gap-4 h-10 border border-[#F0EBEB] rounded-lg px-4 py-2">
                        <img src={filter} alt="filter-icon" />
                        <p className="font-Inter font-medium text-base text-[#44403C] leading-5 text-center align-middle">Filters</p>
                    </button>
                    <button className="w-[129px] flex items-center gap-2 h-10 border border-[#F0EBEB] rounded-lg px-4 py-2">
                        <img src={bulk} alt="filter-icon" />
                        <p className="font-Inter font-medium text-base text-[#44403C] leading-5 text-center align-middle">Bulk Edit</p>
                    </button>
                    <button
                        onClick={() => navigate("/dashboard/add-product")}
                        className="w-[190px] h-10 flex items-center gap-2 bg-[var(--Color-primary,#4B0082)] rounded-lg px-4 py-2 font-Inter font-medium text-base text-white leading-6 tracking-[-0.31px] text-center"
                    >
                        + Add New Product
                    </button>
                </div>
            </div>
            <StatsCards products={products} />
            <div className="flex items-center justify-between gap-3 my-6">
                <div className="relative">
                    <input
                        placeholder="Search products..."
                        className="w-[343px]  h-[48px] bg-white border border-[#B3B3B3] rounded-[4px] px-10 py-2 text-[16px] text-black placeholder:text-[#B3B3B3] font-Inter font-normal tracking-[-0.31px] focus:outline-none"
                    />
                    <img src={search} alt="" className="absolute top-1/3 left-2" />
                </div>
                <div className="flex items-center w-[367px] h-[48px] bg-white rounded-[8px] p-1 relative">
                    <div
                        className="absolute top-1 bottom-1 w-[calc(100%/4-2px)] bg-[#4B0082] rounded-[6px] transition-all duration-300"
                        style={{
                            transform: `translateX(${tabs.indexOf(activeTab) * 100}%)`,
                        }}
                    />
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 h-full text-sm z-10 flex items-center justify-center font-Inter font-normal text-[16px] leading-[20px] tracking-[-0.31px] transition-colors duration-200 ${activeTab === tab
                                    ? "text-white"
                                    : "text-[#292D32]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setViewMode("table")}
                        className={`p-2 rounded ${viewMode === "table" ? "bg-[#4B0082]" : "hover:bg-gray-100"}`}
                    >
                        <img src={menu} alt="table view" className={` ${viewMode === "table" ? "filter brightness-0 invert" : ""}`} />
                    </button>
                    <button 
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded ${viewMode === "grid" ? "bg-[#4B0082]" : "hover:bg-gray-100"}`}
                    >
                        <img src={block} alt="grid view" className={` ${viewMode === "grid" ? "filter brightness-0 invert" : ""}`} />
                    </button>
                </div>
            </div>
            {loading ? (
                <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                        <p className="text-gray-500 text-lg">Loading products...</p>
                    </div>
                </div>
            ) : products.length === 0 ? (
                <EmptyState />
            ) : viewMode === "table" ? (
                <ProductTable products={filteredProducts} />
            ) : (
                <ProductGrid products={filteredProducts} />
            )}
        </>
    );
};

export default Product;