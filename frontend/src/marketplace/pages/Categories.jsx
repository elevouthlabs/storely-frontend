import { useNavigate } from "react-router-dom";
import StoreHeader from "../components/StoreHead.jsx";
import StoreNavbar from "../components/StoreNavbar.jsx";

const Categories = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            name: "Shoes",
            items: 24,
            image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/shoes"
        },
        {
            id: 2,
            name: "Clothing",
            items: 48,
            image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop",
           route: "/store/category/clothing"
        },
        {
            id: 3,
            name: "Accessories",
            items: 16,
            image:
                "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/accessories"
        },
        {
            id: 4,
            name: "Bags",
            items: 12,
            image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
            route: "/store/category/bags"
        }
    ];

    return (
        <div className="min-h-screen bg-[#F5F5F5] max-w-md mx-auto pb-20">
            <StoreHeader />

            <div className="px-4 pt-4">
                <h2 className="text-[22px] font-bold text-[#111827] mb-4">
                    Categories
                </h2>

                <div className="flex flex-col gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => navigate(category.route)}
                            className="bg-white rounded-[14px] p-3 flex items-center justify-between shadow-sm cursor-pointer active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-[72px] h-[72px] rounded-[10px] object-cover"
                                />

                                <div>
                                    <h3 className="text-[16px] font-semibold text-[#111827]">
                                        {category.name}
                                    </h3>

                                    <p className="text-[13px] text-[#6B7280] mt-1">
                                        {category.items} items
                                    </p>
                                </div>
                            </div>

                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-[#9CA3AF]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <StoreNavbar />
        </div>
    );
};

export default Categories;
