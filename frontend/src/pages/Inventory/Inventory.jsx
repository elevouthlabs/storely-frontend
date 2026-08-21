import { useState } from "react";
import {
    Search,
    Package,
    CircleAlert,
    CircleCheck,
    TriangleAlert,
    ArrowRight,  
    ChevronDown,
} from "lucide-react";

const inventoryData = [
    {
        id: 1,
        name: "Sony Alpha a7 IV Camera",
        sku: "CAM-SNY-A74",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "In Stock",
        updated: "2h ago",
    },
    {
        id: 2,
        name: 'MacBook Pro 16" M3 Max',
        sku: "LAP-MBP-16",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Low Stock",
        updated: "2h ago",
    },
    {
        id: 3,
        name: "Desk Lamp LED",
        sku: "LED-2930",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Active",
        updated: "2h ago",
    },
    {
        id: 4,
        name: "AirPods Pro (2nd Gen)",
        sku: "AIR-PRO2",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Active",
        updated: "3d ago",
    },
    {
        id: 5,
        name: "Mechanical Keyboard",
        sku: "KEY-MECH",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Low Stock",
        updated: "2h ago",
    },
    {
        id: 6,
        name: "Samsung 990 PRO SSD",
        sku: "SSD-990",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Active",
        updated: "2h ago",
    },
    {
        id: 7,
        name: "Sony Alpha a7 IV Camera",
        sku: "CAM-SNY-A74",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Out of Stock",
        updated: "2h ago",
    },
    {
        id: 8,
        name: "Sony Alpha a7 IV Camera",
        sku: "CAM-SNY-A74",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Active",
        updated: "2h ago",
    },
    {
        id: 9,
        name: "Sony Alpha a7 IV Camera",
        sku: "CAM-SNY-A74",
        stock: 142,
        minStock: 42,
        amount: "₦12,450",
        status: "Active",
        updated: "1w ago",
    },
];

const Inventory = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");
    const [category, setCategory] = useState("All Categories");

    const stats = [
        {
            title: "Total Products",
            value: "1,247",
            icon: <Package size={18} />,
            bg: "bg-purple-100",
            color: "text-purple-600",
        },
        {
            title: "Healthy Stock",
            value: "47",
            icon: <CircleCheck size={18} />,
            bg: "bg-green-100",
            color: "text-green-600",
        },
        {
            title: "Low Stock",
            value: "1,247",
            icon: <TriangleAlert size={18} />,
            bg: "bg-red-100",
            color: "text-red-500",
        },
        {
            title: "Out of Stock",
            value: "₦1,247",
            icon: <CircleAlert size={18} />,
            bg: "bg-pink-100",
            color: "text-pink-500",
        },
    ];

    return (
        <div className="min-h-screen p-4">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Inventory
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Monitor your stock levels and manage inventory.
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-lg border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-600 hover:bg-orange-100">
                    <TriangleAlert size={16} />
                    View Low Stock Alerts
                    <ArrowRight size={16} />
                </button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

                {stats.map((item) => (

                    <div
                        key={item.title}
                        className="rounded-xl bg-white p-5 shadow-sm border"
                    >
                        <div className="flex justify-between">

                            <div>
                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-bold text-green-700">
                                    {item.value}
                                </h2>
                            </div>

                            <div
                                className={`h-10 w-10 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}
                            >
                                {item.icon}
                            </div>

                        </div>
                    </div>

                ))}

            </div>

            {/* Filters */}

            <div className="mt-8 rounded-xl bg-white border p-5">

                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">

                    <div className="relative lg:w-96">

                        <Search
                            size={18}
                            className="absolute left-4 top-3 text-gray-400"
                        />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by transaction ID, order ID, or customer..."
                            className="w-full rounded-lg border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-purple-500"
                        />

                    </div>

                    <div className="flex gap-3">

                        <div className="relative">

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="appearance-none rounded-lg border bg-white px-4 py-3 pr-10"
                            >
                                <option>All Status</option>
                                <option>In Stock</option>
                                <option>Low Stock</option>
                                <option>Out of Stock</option>
                            </select>

                            <ChevronDown
                                size={18}
                                className="absolute right-3 top-3 text-gray-500"
                            />

                        </div>

                        <div className="relative">

                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="appearance-none rounded-lg border bg-white px-4 py-3 pr-10"
                            >
                                <option>All Categories</option>
                                <option>Electronics</option>
                                <option>Accessories</option>
                                <option>Computers</option>
                            </select>

                            <ChevronDown
                                size={18}
                                className="absolute right-3 top-3 text-gray-500"
                            />

                        </div>

                    </div>

                </div>
            </div>

            {/* Inventory Table */}

            <div className="mt-6 overflow-hidden rounded-xl border bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="border-b bg-gray-50">
                            <tr className="text-left text-sm font-semibold text-gray-600">
                                <th className="px-6 py-4">Product Name</th>
                                <th className="px-6 py-4">SKU</th>
                                <th className="px-6 py-4">Current Stock</th>
                                <th className="px-6 py-4">Min. Stock</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Last Updated</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">

                            {inventoryData
                                .filter((item) =>
                                    item.name.toLowerCase().includes(search.toLowerCase())
                                )
                                .filter((item) =>
                                    status === "All Status" ? true : item.status === status
                                )
                                .map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <td className="px-6 py-5 font-medium text-gray-800 whitespace-nowrap">
                                            {item.name}
                                        </td>

                                        <td className="px-6 py-5 text-gray-500 whitespace-nowrap">
                                            {item.sku}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.stock}
                                        </td>

                                        <td className="px-6 py-5">
                                            {item.minStock}
                                        </td>

                                        <td className="px-6 py-5 font-medium">
                                            {item.amount}
                                        </td>

                                        <td className="px-6 py-5">

                                            {item.status === "In Stock" && (
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                    In Stock
                                                </span>
                                            )}

                                            {item.status === "Active" && (
                                                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                    Active
                                                </span>
                                            )}

                                            {item.status === "Low Stock" && (
                                                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                                                    Low Stock
                                                </span>
                                            )}

                                            {item.status === "Out of Stock" && (
                                                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                                                    Out of Stock
                                                </span>
                                            )}

                                        </td>

                                        <td className="px-6 py-5 text-gray-500 whitespace-nowrap">
                                            {item.updated}
                                        </td>

                                        <td className="px-6 py-5 text-center">
                                            <button className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-purple-700">
                                                Restock
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                </div>

                {/* Footer */}

                <div className="flex flex-col items-center justify-between gap-4 border-t px-6 py-4 text-sm text-gray-500 md:flex-row">
                    <p>
                        Showing 1 to 8 of 456 results
                    </p>

                    <div className="flex items-center gap-2">

                        <button className="rounded border px-3 py-1 hover:bg-gray-100">
                            Prev
                        </button>

                        <button className="rounded bg-orange-500 px-3 py-1 text-white">
                            1
                        </button>

                        <button className="rounded border px-3 py-1 hover:bg-gray-100">
                            2
                        </button>

                        <button className="rounded border px-3 py-1 hover:bg-gray-100">
                            3
                        </button>

                        <button className="rounded border px-3 py-1 hover:bg-gray-100">
                            Next
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
}


export default Inventory;