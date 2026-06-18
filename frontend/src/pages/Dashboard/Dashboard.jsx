import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Users, Package, DollarSign, TrendingUp, Plus } from "lucide-react";

const Dashboard = () => {
    const navigate = useNavigate();

    const business = JSON.parse(localStorage.getItem("business") || "{}");

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="h-[145px] rounded-[12px] p-4 bg-[linear-gradient(107.85deg,#8A2BE2_-14.65%,#4B0082_129.8%)] text-white p-6 rounded-2xl flex justify-between items-center">
                <div className="flex flex-col gap-3">
                    <h1 class="font-Inter font-bold text-[25.5px] text-white leading-[36px]">Welcome to Storely, {business?.name || "Merchant"}!</h1>
                    <p class="font-Inter w-[473px] font-normal text-[15.3px] text-[#D9D9D9] leading-[22px]">
                        Your storefront is officially live. Now it's time to add your first products, set up your services, and start making sales. We're here to help you grow.
                    </p>
                </div>
                <button className="h-[46px] bg-white rounded-[8px] px-[17px] py-[13px] border border-[#E2E8F0] gap-[8px] font-Inter font-medium text-[13.6px] text-[#334155] leading-[24px] text-center align-middle">
                    Share Link
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <StatCard icon={<DollarSign />} title="Total Revenue" value="₦0.00" desc="No sales yet — share your store link to get started" />
                <StatCard icon={<ShoppingCart />} title="Total Orders" value="0" desc="Your orders will count up here in real time" />
                <StatCard icon={<Package />} title="Products Listed" value="0" desc="No sales yet — share your store link to get started" />
                <StatCard icon={<Users />} title="Active Customers" value="0" desc="Grows automatically as buyers place orders" />
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Revenue Overview */}
                <div className="bg-white rounded-2xl shadow-sm lg:col-span-2">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold">Revenue Overview</h2>
                            <span className="text-sm bg-gray-100 px-3 py-1 rounded">Last 30 Days</span>
                        </div>
                        <div className="flex flex-col items-center justify-center h-64 text-center text-gray-500">
                            <TrendingUp className="w-8 h-8 mb-2" />
                            <p className="font-medium">No revenue data yet</p>
                            <p className="text-sm mt-1 max-w-sm">
                                Add products and share your store to start making sales. Your revenue chart will appear here once you make your first sale.
                            </p>
                            <button onClick={() => navigate("/dashboard/product/add-product")} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                                <Plus className="w-4 h-4" /> Add Your First Product
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-sm">
                    <div className="p-6 space-y-3">
                        <h2 className="font-semibold mb-2">Quick Actions</h2>
                        {[
                            "Add Product",
                            "Create Order",
                            "Add Customer",
                            "Update Stock",
                            "Create Discount",
                        ].map((action) => (
                            <div
                                key={action}
                                className="bg-purple-50 hover:bg-purple-100 p-3 rounded-lg cursor-pointer text-sm font-medium"
                            >
                                {action}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-2xl shadow-sm lg:col-span-2">
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold">Recent Orders</h2>
                            <span className="text-sm text-purple-600 cursor-pointer">View All</span>
                        </div>
                        <div className="flex flex-col items-center justify-center h-48 text-gray-500 text-center">
                            <Package className="w-8 h-8 mb-2" />
                            <p className="font-medium">No orders yet</p>
                            <p className="text-sm">
                                When customers place orders, they’ll appear here. Share your store to get your first sale!
                            </p>
                            <button className="mt-3 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg">
                                Share Store Link
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sales by Category */}
                <div className="bg-white rounded-2xl shadow-sm">
                    <div className="p-6">
                        <h2 className="font-semibold mb-4">Sales by Category</h2>
                        <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                            <div className="w-24 h-24 border-4 border-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-xs">0%</span>
                            </div>
                            <p className="text-sm mt-3 text-center">
                                No category data yet. Sales will be broken down by category as orders come in.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function StatCard({ icon, title, value, desc }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-4">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                    {icon}
                    <span className="text-sm">{title}</span>
                </div>
                <h3 className="text-xl font-semibold">{value}</h3>
                <p className="text-xs text-gray-500 mt-1">{desc}</p>
            </div>
        </div>
    );
}

export default Dashboard;