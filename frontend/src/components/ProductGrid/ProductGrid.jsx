import { useState } from "react";

const ProductGrid = ({ products }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleSelectProduct = (productId, checked) => {
        if (checked) {
            setSelectedProducts([...selectedProducts, productId]);
        } else {
            setSelectedProducts(selectedProducts.filter(id => id !== productId));
        }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Product Image */}
                    <div className="aspect-square bg-gray-100 relative">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-gray-400 text-sm">No image</span>
                            </div>
                        )}

                        {/* Checkbox */}
                        <div className="absolute top-2 left-2">
                            <input
                                type="checkbox"
                                checked={selectedProducts.includes(product.id)}
                                onChange={(e) => handleSelectProduct(product.id, e.target.checked)}
                                className="rounded border-gray-300 bg-white shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                        <div className="mb-2">
                            <h3 className="font-Inter font-medium text-sm text-gray-900 truncate">
                                {product.name}
                            </h3>
                            <p className="font-Inter text-xs text-gray-500 mt-1">
                                {product.sku || 'N/A'}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                            <span className="font-Inter font-semibold text-lg text-gray-900">
                                ${product.price || '0.00'}
                            </span>
                            <div>
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
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <span className="font-Inter text-sm text-gray-600">
                                Stock: {product.stock || '0'}
                            </span>
                            <span>Variants: {product.variants || '0'}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
