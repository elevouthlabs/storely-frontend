import empty from "../../assets/empty.png";
import { useNavigate } from "react-router-dom";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-[352px] bg-white rounded-xl border border-[#F5F5F4] shadow-[0px_1px_2px_0px_#0000000D] flex flex-col items-center gap-5 p-6">

        <img
          src={empty}
          alt="Empty products"
          className="w-20 sm:w-24"
        />

        <h2 className="font-semibold text-lg text-[#47444B] text-center">
          Your shelves are empty
        </h2>

        <p className="text-sm text-[#28272A] text-center leading-6">
          Add your first product and start selling. It only takes a minute.
        </p>

        <button
          onClick={() => navigate("/dashboard/product/add-product")}
          className="w-full sm:w-auto min-w-[210px] bg-[#4B0082] rounded-lg px-6 py-3 text-white font-medium hover:bg-[#3c0068] transition-colors"
        >
          Add Your First Product
        </button>
      </div>
    </div>
  );
};

export default EmptyState;