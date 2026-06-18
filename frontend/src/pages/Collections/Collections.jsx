import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const Collections = () => {
    const navigate = useNavigate();

    const collections = [
        {
            id: 1,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 32,
            startDate: "2026-06-01",
            endDate: "2026-08-31",
            image: ""
        },
        {
            id: 2,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 32,
            startDate: "2026-06-01",
            endDate: "2026-08-31",
            image: ""
        },
        {
            id: 3,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 32,
            image: ""
        },
        {
            id: 4,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 32,
            startDate: "2026-06-01",
            endDate: "2026-08-31",
            image: ""
        },
        {
            id: 5,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 32,
            startDate: "2026-06-01",
            endDate: "2026-08-31",
            image: ""
        },
        {
            id: 6,
            name: "Summer Essentials",
            status: "Active",
            type: "Manual",
            products: 45,
            image: ""
        }
    ];

    return (
        <div className="p-3">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-[24px] font-semibold text-[#1A1A1A]">
                        Collections
                    </h1>

                    <p className="text-[14px] text-[#666] mt-1">
                        {collections.length} collections · Smart and manual product groups
                    </p>
                </div>

                <button
                    onClick={() => navigate("/dashboard/collections/add")}
                    className="h-[40px] px-4 bg-[#4B0082] rounded-lg text-white flex items-center gap-2 text-sm font-medium"
                >
                    <Plus size={16} />
                    Add Collections
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {collections.map((collection) => (
                    <div
                        key={collection.id}
                        className="bg-white rounded-xl overflow-hidden border border-[#EFEFEF] hover:shadow-md transition-all cursor-pointer"
                    >
                        <div className="h-[140px] bg-[#D9D9D9]" />

                        <div className="p-4">
                            <h3 className="text-[15px] font-medium text-[#1A1A1A]">
                                {collection.name}
                            </h3>

                            <div className="flex gap-2 mt-2">
                                <span className="px-2 py-1 rounded-full text-[10px] bg-[#E8F7EB] text-[#16A34A]">
                                    {collection.status}
                                </span>

                                <span className="px-2 py-1 rounded-full text-[10px] bg-[#F3E8FF] text-[#9333EA]">
                                    {collection.type}
                                </span>
                            </div>

                            <div className="flex items-end justify-between mt-4">
                                <div>
                                    <p className="text-[13px] text-[#444]">
                                        {collection.products} products
                                    </p>
                                </div>

                                {collection.startDate && (
                                    <div className="text-right text-[12px] text-[#666]">
                                        <p>{collection.startDate}</p>
                                        <p>→ {collection.endDate}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;