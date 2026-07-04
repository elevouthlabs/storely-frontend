import { Users, TrendingUp, Wallet, UserCheck, Search, Filter, Plus } from "lucide-react";

const stats = [
    {
        title: "Total Customers",
        value: 0,
        icon: <Users size={18} />,
    },
    {
        title: "Active Customers",
        value: 0,
        icon: <TrendingUp size={18} />,
    },
    {
        title: "Total Revenue",
        value: "₦0",
        icon: <Wallet size={18} />,
    },
    {
        title: "Returning Customers",
        value: 0,
        icon: <UserCheck size={18} />,
    },
];

const Customers = () => {
    return (
        <div className="mt-3">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-900">
                        Customers
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage your customer base and relationships
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        Segments
                    </button>

                    <button className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
                        Export
                    </button>

                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <Plus size={18} />
                        Add Customer
                    </button>
                </div>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-xl p-5"
                    >
                        <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                            {item.icon}
                        </div>

                        <h3 className="text-sm text-gray-500 mt-4">
                            {item.title}
                        </h3>

                        <p className="text-3xl font-semibold mt-2">
                            {item.value}
                        </p>

                        <span className="text-xs text-gray-400">
                            vs last month
                        </span>
                    </div>
                ))}
            </div>

            {/* Search */}

            <div className="flex flex-col md:flex-row gap-4 mt-8">
                <div className="flex-1 relative">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search customers..."
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
                    <Users
                        size={50}
                        className="mx-auto text-gray-400"
                    />

                    <h3 className="text-xl font-semibold mt-5">
                        No customers yet
                    </h3>

                    <p className="text-gray-500 text-sm mt-3">
                        Your customer list will grow as people shop.
                        Add someone manually or share your store.
                    </p>

                    <div className="flex justify-center gap-3 mt-6">
                        <button className="bg-purple-700 text-white px-5 py-2 rounded-lg">
                            Add Customer
                        </button>

                        <button className="border px-5 py-2 rounded-lg">
                            Share Store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customers;