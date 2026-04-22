import improve from "../../assets/improve.png";
import { useState } from "react";




const AddProduct = () => {

    const [isOn, setIsOn] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col gap-2">
                    <h1 className="font-Inter font-medium text-[24px] leading-[32px] tracking-[0.07px] text-[#1A1A1A]">Add New Product</h1>
                    <p className="font-Inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#B3B3B3]">Fill in the details below to create a new product listing.</p>
                </div>
                <div className="flex gap-2 text-sm">
                    <button className="border px-3 py-1 rounded-md">Discard</button>
                    <button className="border px-3 py-1 rounded-md">
                        Save as Draft
                    </button>
                    <button className="bg-purple-600 text-white px-3 py-1 rounded-md">
                        Publish
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-5">
                    <Card title="Product Details" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="flex flex-col gap-2 mt-[10px]">
                            <label htmlFor="Product Title" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Product Title</label>
                            <input
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
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Compare-at Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Compare-at Price</label>
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Cost per Item" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Cost per Item</label>
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex items-center w-full justify-between my-[10px] col-span-3">
                                <p className="font-Inter font-medium text-[16px] text-black">
                                    Charge Tax
                                </p>
                                <button
                                    onClick={() => setIsOn(!isOn)}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${isOn ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${isOn ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Inventory" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Stock Quantity</label>
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="0.00" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Compare-at Price" className="font-Inter font-medium text-[16px] leading-[18px] text-black">Low-Stock Alert At</label>
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="10" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="Cost per Item" className="font-Inter font-medium text-[16px] leading-[18px] text-black">WEIGHT</label>
                                <input className="w-[198px] h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" placeholder="e.g 320g" />
                            </div>
                            <div className="flex items-center w-full justify-between my-[10px] col-span-3">
                                <p className="font-Inter font-medium text-[16px] text-black">
                                    This product requires shipping
                                </p>
                                <button
                                    onClick={() => setIsOn(!isOn)}
                                    className={`w-[50px] h-[26px] rounded-full flex items-center p-[3px] transition-all duration-300 ${isOn ? "bg-[#4B0082]" : "bg-gray-300"
                                        }`}
                                >
                                    <div
                                        className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transition-all duration-300 ${isOn ? "translate-x-[24px]" : "translate-x-0"
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </Card>
                    
                    <Card title="Tags" className="flex h-auto mt-[10px] flex-col gap-3 font-Inter font-medium text-[20px] leading-[20px] text-black align-middle">
                        <div className="flex items-center gap-2">
                            <input type="text" className="w-full h-[50px] bg-[#F5F5F5] rounded-[8px] p-[10px]" />
                            <button className="w-[67px] h-[50px] border border-[#EFE6FD] rounded-[4px] px-[10px] py-[14px] flex items-center justify-center gap-[10px] font-Poppins font-normal text-[10px] leading-[16px] text-[#2E2E2E] align-middle">Add tags</button>
                        </div>
                    </Card>
                </div>

                {/* RIGHT */}
                <div className="space-y-5">
                    <Card title="Product Image">
                        <div className="border-2 border-dashed p-6 text-center rounded-lg text-sm text-gray-400">
                            Upload your logo
                        </div>
                    </Card>

                    <Card title="Product Status">
                        <select className="input">
                            <option>Active</option>
                            <option>Draft</option>
                        </select>
                    </Card>

                    <Card title="SEO & Metadata">
                        <input className="input mb-2" placeholder="Meta Title" />
                        <input className="input" placeholder="Meta Description" />
                    </Card>
                </div>
            </div>
        </>
    );
}
const Card = ({ title, children }) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <h2 className="font-semibold mb-3">{title}</h2>
            {children}
        </div>
    );
}

export default AddProduct;