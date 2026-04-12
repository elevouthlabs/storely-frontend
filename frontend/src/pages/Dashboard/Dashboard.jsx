import StatsCards from "../../components/StatsCards/StatsCards.jsx";
import EmptyState from "../../components/EmptyState/EmptyState.jsx";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-xl font-semibold">Products Management</h1>
                    <p className="text-sm text-gray-400">
                        Manage your product catalog
                    </p>
                </div>

                <button
                    onClick={() => navigate("/dashboard/add-product")}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm"
                >
                    + Add New Product
                </button>
            </div>

            <StatsCards />

            <div className="flex items-center gap-3 mb-6">
                <input
                    placeholder="Search products..."
                    className="border px-3 py-2 rounded-md w-64"
                />

                <div className="flex gap-2">
                    {["All", "Active", "Low Stock", "Out"].map((tab) => (
                        <button
                            key={tab}
                            className={`px-3 py-1 text-sm rounded-md ${tab === "All"
                                    ? "bg-purple-600 text-white"
                                    : "bg-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <EmptyState />
        </>
    );
};

export default Dashboard;