import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import StoreHead from '../components/StoreHead.jsx';
import StoreNavbar from '../components/StoreNavbar.jsx';

const Cart = () => {
    const navigate = useNavigate();

    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const [promoCode, setPromoCode] = useState('');

    const updateQty = updateQuantity;

    const removeItem = removeFromCart;

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // shipping rule
    const shipping = subtotal > 20000 ? 0 : 2000;

    // final total
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#F5F5F5] max-w-md mx-auto pb-20">

                <StoreHead />

                <div className="flex flex-col items-center justify-center px-6 text-center min-h-[70vh]">

                    {/* purse icon */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                        👜
                    </div>

                    <h2 className="text-xl font-bold text-gray-800">
                        Your cart is empty
                    </h2>

                    <p className="text-sm text-gray-500 mt-2 max-w-[300px]">
                        Looks like you haven't added any products to your cart yet.
                    </p>

                    <button
                        onClick={() => navigate("/store/categories")}
                        className="mt-5 bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium"
                    >
                        Start Shopping
                    </button>
                </div>

                <StoreNavbar />

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] max-w-md mx-auto pb-20">
            <StoreHead />

            <div className="max-w-6xl mx-auto  py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Items Section */}
                    <div className="lg:col-span-2">
                        <div className=" rounded-lg shadow-sm p-6">
                            <h2 className="text-2xl font-bold mb-6">
                                Shopping Cart
                            </h2>

                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className=" bg-white border-b border-gray-200 px-3 py-4 pb-6 mb-6 last:border-b-0  last:mb-0"
                                >
                                    <div className="flex gap-4">

                                        {/* Image */}
                                        <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-2">
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    {item.name}
                                                </h3>

                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-red-500"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            <p className="text-sm text-gray-600 mb-3">
                                                ₦{item.price.toLocaleString()}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity - 1)
                                                        }
                                                        className="w-8 h-8 border rounded-full"
                                                    >
                                                        -
                                                    </button>

                                                    <span>{item.quantity}</span>

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity + 1)
                                                        }
                                                        className="w-8 h-8 border rounded-full"
                                                    >
                                                        +
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="lg:col-span-1 px-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm">

                            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                            <div className="flex justify-between text-gray-600 mb-2">
                                <span>Subtotal</span>
                                <span>₦{subtotal.toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between text-gray-600 mb-2">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : `₦${shipping.toLocaleString()}`}</span>
                            </div>

                            <hr className="my-3" />

                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span>Total</span>
                                <span>₦{total.toLocaleString()}</span>
                            </div>

                        </div>
                    </div>

                    <div className='mt-10 px-4'>
                        <button
                            onClick={() => navigate("/store/checkout")}
                            className="w-full bg-purple-600 text-white py-3 rounded-lg"
                        >
                            Proceed to Checkout
                        </button>

                        <button
                            onClick={() => navigate("/store/categories")}
                            className="w-full bg-gray-200 text-gray-800 py-3 mt-3 rounded-lg"
                        >
                            Add more items
                        </button>
                    </div>
                </div>
            </div>

            <StoreNavbar />
        </div>
    );
};

export default Cart;
