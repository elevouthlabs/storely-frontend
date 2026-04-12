import { useState } from "react";

const menu = [
    "Dashboard",
    "Catalog",
    "Sales",
    "Customers",
    "Finance",
    "Intelligence",
    "Settings",
    "Ask Storely AI",
];


const Dashsidebar = ({ active, setActive }) => {
    return (
        <aside className="w-[250px] bg-[#2D1B4E] text-white flex flex-col justify-between">
            <div>
                <div className="p-5 font-semibold text-lg">Storely</div>

                <div className="px-3 space-y-1 text-sm">
                    {menu.map((item) => (
                        <div
                            key={item}
                            onClick={() => setActive(item)}
                            className={`px-4 py-2 rounded-md cursor-pointer ${active === item
                                    ? "bg-purple-600"
                                    : "hover:bg-purple-700"
                                }`}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-purple-700">
                <p className="text-sm">Jane Doe</p>
                <p className="text-xs text-gray-300">Free Plan</p>
            </div>
        </aside>
    );
}

export default Dashsidebar;