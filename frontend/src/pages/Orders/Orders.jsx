import {
    Search,
    Filter,
    Plus,
    PackageOpen,
} from "lucide-react";

const tabs = [
    "All",
    "Pending",
    "Processing",
    "Shipped",
    "Completed",
];

const Orders = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Orders
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage and track all customer orders.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="border rounded-lg px-4 py-2">
                        Export
                    </button>

                    <button className="bg-purple-700 text-white rounded-lg px-4 py-2 flex items-center gap-2">
                        <Plus size={18} />
                        Create Order
                    </button>
                </div>
            </div>

            {/* Tabs */}

            <div className="flex flex-wrap gap-2 mt-8">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-lg text-sm ${index === 0
                                ? "bg-purple-700 text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {tab} (0)
                    </button>
                ))}
            </div>

            {/* Search */}

            <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="flex-1 relative">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full border rounded-lg pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <button className="border rounded-lg px-5 py-3 flex items-center gap-2">
                    <Filter size={18} />
                    Filters
                </button>
            </div>

            {/* Empty State */}

            <div className="flex justify-center mt-16">
                <div className="bg-white border rounded-2xl w-full max-w-md p-10 text-center">
                    <PackageOpen
                        size={50}
                        className="mx-auto text-gray-400"
                    />

                    <h3 className="text-xl font-semibold mt-5">
                        No orders yet
                    </h3>

                    <p className="text-gray-500 text-sm mt-3">
                        When customers place orders, they'll show
                        up here. Share your store link to get
                        started.
                    </p>

                    <button className="mt-6 bg-purple-700 text-white px-5 py-2 rounded-lg">
                        Share Store Link
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Orders;