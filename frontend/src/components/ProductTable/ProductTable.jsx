import { useState } from "react";
import { useNavigate } from "react-router-dom";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";

const ProductTable = ({ products }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const navigate = useNavigate();

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedProducts(products.map(product => product.id));
        } else {
            setSelectedProducts([]);
        }
    };

    const handleSelectProduct = (productId, checked) => {
        if (checked) {
            setSelectedProducts([...selectedProducts, productId]);
        } else {
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        }
    };

    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        window.location.reload();
    };

    const handleEditProduct = (productId) => {
        navigate(`/edit-product/${productId}`);
    };

    if (!products || products.length === 0) {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="text-center">
                    <p className="text-gray-500 text-lg">No products found</p>
                    <p className="text-gray-400 text-sm mt-2">Add your first product to get started</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={selectedProducts.length === products.length}
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    className="rounded border-gray-300"
                                />
                            </th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Product</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Category</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Price</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Stock</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Variants</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Status</th>
                            <th className="text-left p-4 font-Inter font-medium text-sm text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="p-4">
                                    <input
                                        type="checkbox"
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                                        className="rounded border-gray-300"
                                    />
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                            {product.image ? (
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                                            ) : (
                                                <span className="text-gray-400 text-xs">No img</span>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-Inter font-medium text-sm text-gray-900">{product.name}</p>
                                            <p className="font-Inter text-sm text-gray-600">{product.sku || 'N/A'}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <p className="font-Inter text-xs text-gray-500 mt-1">{product.category || 'Uncategorized'}</p>
                                </td>
                                <td className="p-4">
                                    <p className="font-Inter text-sm text-gray-900">${product.price || '0.00'}</p>
                                </td>
                                <td className="p-7">
                                    <p className="font-Inter text-sm text-gray-900">{product.stock || '0'}</p>
                                </td>
                                <td className="p-7">
                                    <p className="font-Inter text-sm text-gray-900">{product.variants || '0'}</p>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                        product.stock === 0
                                            ? 'bg-red-100 text-red-800'
                                            : product.stock >= 1 && product.stock <= 5
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                    }`}>
                                        {product.stock === 0 
                                            ? 'Out of Stock' 
                                            : product.stock >= 1 && product.stock <= 5
                                                ? 'Low Stock'
                                                : product.status || 'Active'
                                        }
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => handleEditProduct(product.id)}
                                            className="p-1 hover:bg-gray-100 rounded"
                                        >
                                            <img src={edit} alt="edit" className="w-4 h-4" />
                                        </button>
                                        <button 
                                            onClick={() => handleDeleteProduct(product.id)}
                                            className="p-1 hover:bg-red-50 rounded"
                                        >
                                            <img src={trash} alt="delete" className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
