

const AddProduct = () => {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Add New Product</h1>

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
                {/* LEFT */}
                <div className="col-span-2 space-y-5">
                    <Card title="Product Details">
                        <input className="input" placeholder="Product Title" />
                        <textarea className="input mt-3" placeholder="Description" />
                    </Card>

                    <Card title="Pricing">
                        <div className="grid grid-cols-3 gap-3">
                            <input className="input" placeholder="Price" />
                            <input className="input" placeholder="Compare-at Price" />
                            <input className="input" placeholder="Cost per item" />
                        </div>
                    </Card>

                    <Card title="Inventory">
                        <div className="grid grid-cols-3 gap-3">
                            <input className="input" placeholder="Stock Quantity" />
                            <input className="input" placeholder="Low Stock Alert" />
                            <input className="input" placeholder="Weight" />
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