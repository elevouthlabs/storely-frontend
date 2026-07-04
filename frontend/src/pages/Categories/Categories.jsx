import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const Dashcategories = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const storedCategories = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        setCategories(storedCategories);
    }, []);

    const totalPages = Math.ceil(categories.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentCategories = categories.slice(startIndex, endIndex);

    return (
        <div className="mt-6 px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">
                        Categories
                    </h1>

                    <p className="text-sm md:text-base text-[#28272A]">
                        {categories.length} categories · Organise your product catalogue
                    </p>
                </div>

                <button
                    onClick={() => navigate("/dashboard/categories/add")}
                    className="w-full sm:w-auto bg-[#4B0082] text-white px-4 py-3 rounded-lg font-medium"
                >
                    + Add Category
                </button>
            </div>

            <div className="bg-white rounded-xl mt-6 border overflow-hidden">
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-[850px] w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="p-4 font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[-0.15px]">Category</th>
                                <th className="p-4 font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[-0.15px]">Slug</th>
                                <th className="p-4 font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[-0.15px]">Products</th>
                                <th className="p-4 font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[-0.15px]">Description</th>
                                <th className="p-4 font-Inter font-medium text-[14px] text-[#28272A] leading-[20px] tracking-[-0.15px]">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {categories.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="text-center py-12 text-gray-500 text-sm md:text-base"
                                    >
                                        No categories found
                                    </td>
                                </tr>
                            ) : (
                                currentCategories.map((category) => (
                                    <tr
                                        key={category.id}
                                        className="border-b"
                                    >
                                        <td className="p-4 font-Inter font-medium text-[14px] text-[#47444B] leading-[24px] tracking-[-0.31px]">
                                            {category.name}
                                        </td>

                                        <td className="p-4 font-Inter font-medium text-[14px] text-black leading-[20px] tracking-[-0.15px]">
                                            {category.slug}
                                        </td>

                                        <td className="p-4 font-Inter font-medium text-[14px] text-[#1C1917] leading-[20px]">
                                            {category.products} items
                                        </td>

                                        <td className="p-4 max-w-[220px]">
                                            <p className="truncate">
                                                {category.description}
                                            </p>
                                        </td>

                                        <td className="p-4">
                                            <div className="flex flex-wrap gap-3">
                                                <button
                                                    onClick={() =>
                                                        navigate(`/dashboard/categories/edit/${category.id}`)
                                                    }
                                                    className="font-Inter font-medium text-[14px] text-[#8A2BE2] leading-[24px] tracking-[-0.31px] text-center"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() => {
                                                        if (
                                                            window.confirm(
                                                                "Delete this category?"
                                                            )
                                                        ) {
                                                            const updatedCategories =
                                                                categories.filter(
                                                                    (cat) =>
                                                                        cat.id !== category.id
                                                                );

                                                            localStorage.setItem(
                                                                "categories",
                                                                JSON.stringify(updatedCategories)
                                                            );

                                                            setCategories(updatedCategories);

                                                            const newTotalPages = Math.ceil(
                                                                updatedCategories.length / itemsPerPage
                                                            );

                                                            if (currentPage > newTotalPages && newTotalPages > 0) {
                                                                setCurrentPage(newTotalPages);
                                                            }

                                                            toast.success(
                                                                "Category deleted successfully"
                                                            );
                                                        }
                                                    }}
                                                    className="font-Inter font-medium text-[14px] text-[#E86161] leading-[24px] tracking-[-0.31px] text-center"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="block md:hidden space-y-4">
                    {categories.length === 0 ? (
                        <div className="bg-white rounded-xl p-8 text-center text-gray-500">
                            No categories found
                        </div>
                    ) : (
                        currentCategories.map((category) => (
                            <div
                                key={category.id}
                                className="bg-white rounded-xl border p-4 shadow-sm"
                            >
                                <div className="space-y-3">

                                    <div>
                                        <p className="text-xs text-gray-500">Category</p>
                                        <h3 className="font-semibold text-lg">
                                            {category.name}
                                        </h3>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Slug</p>
                                        <p>{category.slug}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Products</p>
                                        <p>{category.products} items</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-gray-500">Description</p>
                                        <p className="text-sm break-words">
                                            {category.description}
                                        </p>
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <button
                                            onClick={() =>
                                                navigate(`/dashboard/categories/edit/${category.id}`)
                                            }
                                            className="flex-1 bg-[#4B0082] text-white py-2 rounded-lg"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => {
                                                if (window.confirm("Delete this category?")) {
                                                    const updatedCategories = categories.filter(
                                                        (cat) => cat.id !== category.id
                                                    );

                                                    localStorage.setItem(
                                                        "categories",
                                                        JSON.stringify(updatedCategories)
                                                    );

                                                    setCategories(updatedCategories);
                                                    toast.success("Category deleted successfully");
                                                }
                                            }}
                                            className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg"
                                        >
                                            Delete
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 p-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`border px-3 py-2 rounded text-sm ${currentPage === 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                            }`}
                    >
                        Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded border ${currentPage === index + 1
                                ? "bg-[#4B0082] text-white"
                                : "bg-white"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() =>
                            setCurrentPage((prev) =>
                                Math.min(prev + 1, totalPages)
                            )
                        }
                        disabled={currentPage === totalPages}
                        className={`border px-3 py-1 rounded ${currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashcategories;