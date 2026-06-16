import improve from "../../assets/improve.png";
import { useState } from "react";
import plus from "../../assets/plus.png";
import up from "../../assets/up.png";
import { ProductsRequests } from "../../api/axios";
import { toast, ToastContainer } from 'react-toastify';



const AddProduct = () => {
    const [isOn, setIsOn] = useState(false);
    const [toggles, setToggles] = useState({
        chargeTax: false,
        requiresShipping: false,
        visibleOnStorefront: false,
        featuredProduct: false,
    });
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        sku: '',
        barcode: '',
        images: [],
        stockQuantity: '',
        lowStockAlert: '',
        weight: '',
        chargeTax: false,
        requiresShipping: false,
        status: 'draft',
        category: '',
        collection: '',
        metaTitle: '',
        metaDescription: '',
        rating: 0,
        reviews: 0
    });

    const handleToggle = (key) => {
        setToggles((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [...formData.images, ...files];
        setFormData({ ...formData, images: newImages });
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const removeImage = (index) => {
        const newImages = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: newImages });
    };

    const handleDiscard = () => {
        setFormData({
            name: '',
            description: '',
            price: '',
            sku: '',
            barcode: '',
            images: [],
            stockQuantity: '',
            lowStockAlert: '',
            weight: '',
            chargeTax: false,
            requiresShipping: false,
            status: 'draft',
            category: '',
            collection: '',
            metaTitle: '',
            metaDescription: '',
            rating: 0,
            reviews: 0
        });
        toast.success('Form discarded');
    };

    const handleSaveDraft = () => {
        // Save current form data as draft
        toast.success('Draft saved');
    };

    const handlePublish = () => {
        if (!formData.name || !formData.price) {
            toast.error('Product name and price are required');
            return;
        }

        // Get existing products from localStorage or initialize empty array
        const existingProducts = JSON.parse(localStorage.getItem('products') || '[]');

        // Create new product object with form data
        const newProduct = {
            id: Date.now(), // Simple unique ID
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            sku: formData.sku || `SKU-${Date.now()}`,
            barcode: formData.barcode,
            stock: parseInt(formData.stockQuantity) || 0,
            status: 'active',
            dateAdded: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
            image: formData.images.length > 0 ? URL.createObjectURL(formData.images[0]) : null,
            rating: formData.rating || 0,
            reviews: formData.reviews || 0
        };

        // Add new product to existing products
        const updatedProducts = [...existingProducts, newProduct];

        // Save to localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));

        toast.success('Product published successfully!');

        // Reset form after successful publish
        handleDiscard();
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col gap-2">
                    <h1 className="font-Inter font-medium text-[24px] leading-[32px] tracking-[0.07px] text-[#1A1A1A]">Add New Product</h1>
                    <p className="font-Inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#B3B3B3]">Fill in the details below to create a new product listing.</p>
                </div>
                <div className="flex gap-2 text-sm">
                    <button onClick={handleDiscard} className=" -[34px] px-4 py-2 border border-[#8A2BE2] rounded-[8px] font-Inter font-medium text-[14px] text-[#44403C] leading-[20px]">
                        Discard
                    </button>
                    <button onClick={handleSaveDraft} className="h-[34px] px-4 py-2 border border-[#8A2BE2] rounded-[8px] font-Inter font-medium text-[14px] text-[#44403C] leading-[20px]">
                        Save as Draft
                    </button>
                    <button onClick={handlePublish} className="w-[164px] h-[34px] bg-[#4B0082] rounded-[8px] px-4 py-[6px] font-Inter font-medium text-[14px] leading-[20px] text-white text-center" >
                        Publish Products
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-5">
                    <Card title="Product Details" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="flex flex-col gap-2 mt-[10px]">
                            <label htmlFor="Product Title" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Product Title</label>
                            <input
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="w-full h-[50px]  bg-[#F5F5F5] rounded-[8px] p-[10px] px-4 text-[16px] font-Inter font-normal text-[#1A1A1A] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#4B0082]"
                                placeholder="e.g. Classic White T-Shirt"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-[10px]">
                            <div className="flex items-center justify-between">
                                <label htmlFor="Description" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Description</label>
                                <button className="w-[122px] h-[28px] flex items-center  rounded-full bg-gradient-to-b from-[#8A2BE2] to-[#4B0082] font-Inter font-medium text-[10.2px] leading-[16px] text-[#F5F5F5] text-center align-middle">
                                    <img src={improve} alt="" className="px-3" /> Improve with AI
                                </button>
                            </div>
                            <textarea
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                className="w-full h-[130px] bg-[#F5F5F5] rounded-[12px] border border-[#E5E7EB] p-[17px] text-[16px] font-Inter font-normal text-[#1A1A1A] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#4B0082] resize-none"
                                placeholder="Premium wireless headphones with active noise cancellation, 40-hour battery life, and studio-quality sound. Perfect for professionals and audiophiles."
                            />
                        </div>
                        <div className="w-full flex items-center gap-3 mt-[10px]">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="SKU" className="text-sm font-Inter font-medium text-black">
                                    SKU
                                </label>
                                <input
                                    id="SKU"
                                    type="text"
                                    value={formData.sku}
                                    onChange={(e) => handleInputChange('sku', e.target.value)}
                                    placeholder="WPH-X7-BLK"
                                    className="w-[320px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px] outline-none focus:border focus:border-[#4B0082]"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="Barcode" className="text-sm font-Inter font-medium text-black">
                                    Barcode
                                </label>
                                <input
                                    id="Barcode"
                                    type="text"
                                    value={formData.barcode}
                                    onChange={(e) => handleInputChange('barcode', e.target.value)}
                                    placeholder="012345678901"
                                    className="w-[320px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px] outline-none focus:border focus:border-[#4B0082]"
                                />
                            </div>

                        </div>
                    </Card>

                    <Card title="Pricing" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Price</label>
                                <input
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Compare-at Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Compare-at Price</label>
                                <input className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Cost per Item" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Cost per Item</label>
                                <input className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex items-center w-full justify-between my-[10px] col-span-3">
                                <p className="font-Inter font-medium text-[16px] text-black">
                                    Charge Tax
                                </p>
                                <button
                                    onClick={() => handleToggle("chargeTax")}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${toggles.chargeTax ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${toggles.chargeTax ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Inventory" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Stock Quantity" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Stock Quantity</label>
                                <input
                                    value={formData.stockQuantity}
                                    onChange={(e) => handleInputChange('stockQuantity', e.target.value)}
                                    className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]"
                                    placeholder="0.00"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Compare-at Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Low-Stock Alert At</label>
                                <input className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="10" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Cost per Item" className="font-Inter font-medium text-[16px] leading-[18px] text-black">WEIGHT</label>
                                <input className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="e.g 320g" />
                            </div>
                            <div className="flex items-center w-full justify-between my-[10px] col-span-3">
                                <p className="font-Inter font-medium text-[16px] text-black">
                                    This product requires shipping
                                </p>
                                <button
                                    onClick={() => handleToggle("requiresShipping")}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${toggles.requiresShipping ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${toggles.requiresShipping ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Tags" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="e.g. Classic White T-Shirt" className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" />
                            <button className="w-[67px] h-[50px] border border-[#EFE6FD] rounded-[4px] px-[10px] py-[14px] flex items-center justify-center gap-[10px] font-Poppins font-normal text-[10px] leading-[16px] text-[#2E2E2E] align-middle">Add tags</button>
                        </div>
                    </Card>
                    <Card title="Variants" className="w-full h-[185px] bg-white rounded-[12px] p-5">
                        <div>

                            <p className="font-Inter font-medium text-[14px] leading-[22px] tracking-[0px] text-[#4A5565]">Add variants if this product comes in different sizes, colours, or materials.</p>
                            <button className="flex item-center gap-2 font-Inter mt-10 font-medium text-[14px] leading-[24px] tracking-[-0.31px] text-[#28272A] text-center w-[153px] h-10 border border-[#50525633] rounded-[8px] py-2 px-4"><img src={plus} alt="plus icon" /> Add Options</button>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col gap-4">
                    <Card title="Product Image" className="w-full h-[303px] bg-white rounded-[16px] p-5 ">
                        <div className="w-full flex flex-col items-center justify-center gap-2 h-[197px] border border-[#D9D9D9] rounded-[8px] p-5">
                            {formData.images.length > 0 ? (
                                <div className="w-full">
                                    <div className="grid grid-cols-4 gap-2 mb-4">
                                        {formData.images.map((image, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`Product image ${index + 1}`}
                                                    className="w-full h-24 object-cover rounded-lg border border-gray-200"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeImage(index)}
                                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center">
                                        <label className="w-[190px] h-[48px] bg-[var(--Color-primary,#4B0082)] rounded-lg px-4 py-2 flex items-center justify-center gap-2 font-Inter font-medium text-white text-center cursor-pointer">
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="hidden"
                                            />
                                            <span>Add More Images</span>
                                        </label>
                                    </div>
                                </div>
                            ) : (
                                <label className="cursor-pointer flex flex-col items-center justify-center gap-2 w-full h-full">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />
                                    <div>
                                        <img src={up} alt="" />
                                    </div>
                                    <h4 className="font-Inter font-medium text-[11.9px] leading-[20px] text-[#2E2E2E] text-center align-middle">Upload your logo</h4>
                                    <p className="font-Inter font-normal text-[10.2px] leading-[16px] text-[#9CA3AF] text-center align-middle">PNG, JPG up to 2MB</p>
                                </label>
                            )}
                        </div>
                    </Card>

                    <Card title="Product Status" className="w-full  h-[243px] rounded-[16px] p-5 bg-white">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Status" className="font-Inter font-medium text-[16px] leading-[18px] tracking-[0px] text-[#47444B]">Status</label>
                            <select className="input w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-2.5 font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">
                                <option>Active</option>
                                <option>Draft</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3 mt-7">
                            <div className="flex items-center justify-between">
                                <p className="font-Inter font-medium text-[16px] leading-[20px] tracking-[0px] text-[#47444B]">Visible on Storefront</p>
                                <button
                                    onClick={() => handleToggle("visibleOnStorefront")}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${toggles.visibleOnStorefront ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${toggles.visibleOnStorefront ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="font-Inter font-medium text-[16px] leading-[20px] tracking-[0px] text-[#47444B]">Featured Products</p>
                                <button
                                    onClick={() => handleToggle("featuredProduct")}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${toggles.featuredProduct ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${toggles.featuredProduct ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Organization" className="w-full  h-[283px] rounded-[16px] p-5 bg-white">
                        <div className="flex flex-col gap-3 mt-4">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="Status" className="font-Inter font-medium text-[16px] leading-[18px] tracking-[0px] text-[#47444B]">Category</label>
                                <select className="input w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-2.5 font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Electronics</option>
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Draft</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="Status" className="font-Inter font-medium text-[16px] leading-[18px] tracking-[0px] text-[#47444B]">Collection</label>
                                <select className="input w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-2.5 font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">none</option>
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Draft</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full h-[44px] mt-8 bg-[#4B0082] rounded-[8px] py-3 font-Inter font-medium text-[14px] leading-[20px] text-white text-center">
                            Mark as Completed
                        </button>
                    </Card>

                    <Card title="SEO & Metadata" className="w-full  h-[283px] rounded-[16px] p-5 bg-white">
                        <div className="flex flex-col gap-3 mt-7">
                            <div className="flex flex-col gap-3">
                                <label htmlFor="Status" className="font-Inter font-medium text-[16px] leading-[18px] tracking-[0px] text-[#47444B]">Meta Title</label>
                                <select className="input w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-2.5 font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Electronics — My Store</option>
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Draft</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-3">
                                <label htmlFor="Status" className="font-Inter font-medium text-[16px] leading-[18px] tracking-[0px] text-[#47444B]">Meta Description</label>
                                <select className="input w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-2.5 font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Gadgets, audio, tech accessories</option>
                                    <option className="font-Inter font-normal text-[16px] leading-[24px] text-[#6B7280]">Draft</option>
                                </select>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};
const Card = ({ title, children }) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <h2 className="font-semibold mb-3">{title}</h2>
            {children}
        </div>
    );
}

export default AddProduct;