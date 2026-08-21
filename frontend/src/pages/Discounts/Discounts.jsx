import { useState } from "react";
import {
    Search,
    Plus,
    Tag,
    Calendar,
    CheckCircle,
} from "lucide-react";

const Discounts = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");

    const stats = [
        {
            title: "Total Discounts",
            value: "0",
            icon: <Tag size={18} />,
            bg: "bg-purple-100",
            color: "text-purple-600",
        },
        {
            title: "Active",
            value: "0",
            icon: <CheckCircle size={18} />,
            bg: "bg-green-100",
            color: "text-green-600",
        },
        {
            title: "Total Uses",
            value: "0",
            icon: <Tag size={18} />,
            bg: "bg-blue-100",
            color: "text-blue-600",
        },
        {
            title: "Scheduled",
            value: "0",
            icon: <Calendar size={18} />,
            bg: "bg-pink-100",
            color: "text-pink-600",
        },
    ];

    return (
        <div className="min-h-screen  p-4  ">

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Discounts & Coupons
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Create and manage promotional codes
                    </p>
                </div>

                <button className="flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-white hover:bg-purple-700">
                    <Plus size={18} />
                    Create Discount
                </button>

            </div>

            {/* Cards */}

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                {stats.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-xl border bg-white p-5 shadow-sm"
                    >
                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-sm text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="mt-3 text-3xl font-bold">
                                    {item.value}
                                </h2>

                            </div>

                            <div
                                className={`flex h-11 w-11 items-center justify-center rounded-full ${item.bg} ${item.color}`}
                            >
                                {item.icon}
                            </div>

                        </div>
                    </div>
                ))}

            </div>

            {/* Filters */}

            <div className="mt-8 rounded-xl border bg-white p-5">

                <div className="flex flex-col gap-4 md:flex-row md:justify-between">

                    <div className="relative md:w-96">

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

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="rounded-lg border px-4 py-3"
                    >
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Expired</option>
                        <option>Scheduled</option>
                    </select>

                </div>

            </div>

            {/* Empty State */}

            <div className="mt-10 flex justify-center">

                <div className="w-full max-w-md rounded-2xl border bg-white p-10 text-center shadow-sm">

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">

                        <Tag
                            size={36}
                            className="text-gray-500"
                        />

                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-gray-800">
                        No promotions yet
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                        Create a discount or coupon code to
                        encourage customers and boost sales.
                    </p>

                    <button className="mt-8 rounded-lg bg-purple-600 px-6 py-3 text-white transition hover:bg-purple-700">
                        Create Your First Discount
                    </button>

                </div>

            </div>

        </div>
    );
}


export default Discounts;