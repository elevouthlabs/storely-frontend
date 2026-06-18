import React from "react";

const FilterDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-[#11182780] z-40"
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-screen w-[320px] bg-white shadow-xl z-50 transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-5 border-b flex items-center justify-between">
                    <h2 className="font-semibold text-lg">Filters</h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-5 space-y-6">
                    {/* Status */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Status</h3>

                        <div className="space-y-2">
                            {["Active", "Draft", "Low Stock", "Out of Stock"].map(
                                (item) => (
                                    <label
                                        key={item}
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <input type="checkbox" />
                                        {item}
                                    </label>
                                )
                            )}
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Category</h3>

                        <div className="space-y-2">
                            {[
                                "Home Decor",
                                "Apparel",
                                "Accessories",
                                "Lighting",
                                "Kitchen",
                                "Outdoor",
                            ].map((item) => (
                                <label
                                    key={item}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <input type="checkbox" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Price Range</h3>

                        <div className="flex gap-2">
                            <input
                                placeholder="Min"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />

                            <input
                                placeholder="Max"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Stock */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Stock Range</h3>

                        <div className="flex gap-2">
                            <input
                                placeholder="Min"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />

                            <input
                                placeholder="Max"
                                className="w-full border rounded-md px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Collections */}
                    <div>
                        <h3 className="text-sm font-medium mb-3">Collections</h3>

                        <div className="space-y-2">
                            {[
                                "Summer Essentials",
                                "New Arrivals",
                                "Best Sellers",
                            ].map((item) => (
                                <label
                                    key={item}
                                    className="flex items-center gap-2 text-sm"
                                >
                                    <input type="checkbox" />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 bg-white border-t p-4 flex justify-between">
                    <button className="text-sm text-gray-500">
                        Clear All
                    </button>

                    <button className="bg-[#4B0082] text-white px-5 py-2 rounded-md text-sm">
                        Apply Filters
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterDrawer;