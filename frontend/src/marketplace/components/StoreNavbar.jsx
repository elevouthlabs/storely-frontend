import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import home from "../../assets/home.png";
import sea from "../../assets/sea.png";
import cate from "../../assets/cate.png";
import cart from "../../assets/cart.png";
import account from "../../assets/account.png";

const StoreNavbar = () => {
    const navigate = useNavigate();

    const { cartItems } = useCart();

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
            <div className="flex justify-around py-2">
                <button
                    onClick={() => navigate("/store")}
                    className="flex flex-col items-center gap-1 p-2"
                >
                    <img className="w-5 h-5" src={home} alt="" />
                    <h4 className="text-xs text-purple-600">Home</h4>
                </button>

                <button
                    onClick={() => navigate("/search")}
                    className="flex flex-col items-center gap-1 p-2"
                >
                    <img className="w-5 h-5" src={sea} alt="" />
                    <h4 className="text-xs text-gray-600">Search</h4>
                </button>

                <button
                    onClick={() => navigate("/store/categories")}
                    className="flex flex-col items-center gap-1 p-2"
                >
                    <img className="w-5 h-5" src={cate} alt="" />
                    <h4 className="text-xs text-gray-600">Categories</h4>
                </button>

                <button
                    onClick={() => navigate("/store/cart")}
                    className="flex flex-col items-center gap-1 p-2 relative"
                >
                    <img className="w-5 h-5" src={cart} alt="" />
                    <span className="absolute top-1 right-4 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                        {cartCount}
                    </span>
                    <h4 className="text-xs text-gray-600">Cart</h4>
                </button>

                <button
                    onClick={() => navigate("/store/profile")}
                    className="flex flex-col items-center gap-1 p-2"
                >
                    <img className="w-5 h-5" src={account} alt="" />
                    <h4 className="text-xs text-gray-600">Account</h4>
                </button>
            </div>
        </div>
    );
};

export default StoreNavbar;