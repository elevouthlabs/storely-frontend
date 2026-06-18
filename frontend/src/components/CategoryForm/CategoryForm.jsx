import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CategoryForm = ({ mode = "add" }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [productCount, setProductCount] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        description: "",
        parentCategory: "",
        metaTitle: "",
        metaDescription: "",
        image: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const imageUrl = URL.createObjectURL(file);

        setImagePreview(imageUrl);

        setFormData({
            ...formData,
            image: imageUrl,
        });
    };

    useEffect(() => {
        if (mode === "edit" && id) {
            const categories = JSON.parse(
                localStorage.getItem("categories") || "[]"
            );

            const category = categories.find(
                (cat) => cat.id === Number(id)
            );

            if (category) {
                setFormData(category);
                setImagePreview(category.image || null);

                const products = JSON.parse(
                    localStorage.getItem("products") || "[]"
                );

                const count = products.filter(
                    (product) => product.categoryId === category.id
                ).length;

                setProductCount(count);
            }

            if (category) {
                setFormData(category);
                setImagePreview(category.image || null);
            } else {
                toast.error("Category not found");
                navigate("/dashboard/categories");
            }
        }
    }, [id, mode, navigate]);

    const handleSave = () => {
        if (!formData.name.trim()) {
            toast.error("Category name is required");
            return;
        }

        const categories = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        if (mode === "add") {
            const newCategory = {
                ...formData,
                id: Date.now(),
                products: 0,
            };

            categories.push(newCategory);

            localStorage.setItem(
                "categories",
                JSON.stringify(categories)
            );

            toast.success("Category created successfully");

            navigate("/dashboard/categories");
        } else {
            const updatedCategories = categories.map((cat) =>
                cat.id === Number(id)
                    ? {
                        ...cat,
                        ...formData,
                    }
                    : cat
            );

            localStorage.setItem(
                "categories",
                JSON.stringify(updatedCategories)
            );

            toast.success("Category updated successfully");

            navigate("/dashboard/categories");
        }
    };

    const handleDelete = () => {
        const categories = JSON.parse(
            localStorage.getItem("categories") || "[]"
        );

        const updatedCategories = categories.filter(
            (cat) => cat.id !== Number(id)
        );

        localStorage.setItem(
            "categories",
            JSON.stringify(updatedCategories)
        );

        toast.success("Category deleted");

        navigate("/dashboard/categories");
    };

    return (
        <div className="py-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h1 className="text-[28px] font-semibold text-[#1A1A1A]">
                        {mode === "edit" ? "Edit Category" : "Add New Category"}
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate("/dashboard/categories")}
                        className="w-[100px] h-[40px] border border-[#E5E7EB] rounded-lg text-sm"
                    >
                        Cancel
                    </button>

                    {mode === "edit" && (
                        <button
                            onClick={handleDelete}
                            className="text-[#EF4444] text-sm"
                        >
                            Delete Category
                        </button>
                    )}

                    <button
                        onClick={handleSave}
                        className="bg-[#4B0082] text-white px-6 h-[40px] rounded-lg text-sm"
                    >
                        Save Category
                    </button>
                </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-12 gap-6">
                {/* LEFT */}
                <div className="col-span-8 space-y-6">
                    {/* Product Details */}
                    <div className="bg-white rounded-2xl p-6 border border-[#F0F0F0]">
                        <h2 className="font-medium text-[#1A1A1A] mb-5">
                            Product Details
                        </h2>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm mb-2">
                                    Category Name*
                                </label>

                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full h-[48px] rounded-lg bg-[#F8F8F8] px-4 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">
                                    URL Slug
                                </label>

                                <input
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    placeholder="e.g. classic-white-tshirt"
                                    className="w-full h-[48px] rounded-lg bg-[#F8F8F8] px-4 outline-none"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm">
                                        Description
                                    </label>

                                    <button className="bg-[#4B0082] text-white text-xs px-3 py-1 rounded-full">
                                        ✨ Improve with AI
                                    </button>
                                </div>

                                <textarea
                                    rows={5}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#F8F8F8] p-4 resize-none outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">
                                    Parent Category
                                </label>

                                <select
                                    name="parentCategory"
                                    value={formData.parentCategory}
                                    onChange={handleChange}
                                    className="w-full h-[48px] rounded-lg bg-[#F8F8F8] px-4 outline-none"
                                >
                                    <option value="">
                                        No parent (top-level)
                                    </option>
                                    <option value="fashion">
                                        Fashion
                                    </option>
                                    <option value="electronics">
                                        Electronics
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* SEO */}
                    <div className="bg-white rounded-2xl p-6 border border-[#F0F0F0]">
                        <h2 className="font-medium text-[#1A1A1A] mb-5">
                            SEO & Metadata
                        </h2>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm mb-2">
                                    Meta Title
                                </label>

                                <input
                                    name="metaTitle"
                                    value={formData.metaTitle}
                                    onChange={handleChange}
                                    className="w-full h-[48px] rounded-lg bg-[#F8F8F8] px-4 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">
                                    Meta Description
                                </label>

                                <textarea
                                    rows={4}
                                    name="metaDescription"
                                    value={formData.metaDescription}
                                    onChange={handleChange}
                                    className="w-full rounded-lg bg-[#F8F8F8] p-4 resize-none outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="col-span-4 space-y-6">
                    {/* Image */}
                    <div className="bg-white rounded-2xl p-5 border border-[#F0F0F0]">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="font-medium">
                                Image Gallery
                            </h2>

                            <button className="text-[#4B0082] text-sm">
                                All Images →
                            </button>
                        </div>

                        <h3 className="text-sm mb-3">
                            Primary Image
                        </h3>

                        <div className="h-[180px] bg-[#ECECEC] rounded-lg overflow-hidden flex items-center justify-center">
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Category"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-gray-400 text-sm">
                                    No image selected
                                </span>
                            )}
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="mt-4 border border-[#E5E7EB] rounded-md px-4 py-2 text-sm text-[#4B0082]"
                        >
                            {imagePreview ? "Replace Image" : "Upload Image"}
                        </button>
                    </div>
                    {mode === "edit" && (
                        <div className="bg-white rounded-2xl p-5 border border-[#F0F0F0]">
                            <h2 className="font-medium mb-3">
                                Products in Category
                            </h2>

                            <h3 className="text-[32px] font-semibold text-[#1A1A1A]">
                                {productCount}
                            </h3>

                            <p className="text-sm text-[#666] mt-1">
                                Products assigned to this category
                            </p>

                            <button
                                onClick={() => navigate("/dashboard/product")}
                                className="mt-4 text-[#4B0082] text-sm font-medium"
                            >
                                View Products →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryForm;