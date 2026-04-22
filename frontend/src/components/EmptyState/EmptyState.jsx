import empty from "../../assets/empty.png";
import { useNavigate } from "react-router-dom";


const EmptyState = () => {
   const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center py-3">
      <div className="w-[352px]  bg-white rounded-xl border border-[#F5F5F4] shadow-[0px_1px_2px_0px_#0000000D] flex flex-col items-center justify-center gap-4 p-6">
        <div>
          <img src={empty} alt="box-icon" />
        </div>
        <p className="font-Inter font-semibold text-base text-[#47444B] leading-7 text-center align-middle">
          Your shelves are empty
        </p>
        <p className="font-Inter font-normal text-[11.9px] text-[#28272A] leading-[22px] text-center align-middle">
          Add your first product and start selling. It only takes a minute.
        </p>
        <button onClick={() => navigate("/dashboard/add-product")} className="w-[210px]  bg-[var(--Color-primary,#4B0082)] rounded-lg p-[10px] shadow-[0px_1px_2px_0px_#0000000D] flex items-center justify-center gap-[10px] font-Inter font-medium text-base text-white leading-5 text-center align-middle">
          Add Your First Product
        </button>
      </div>
    </div>
  );
};

export default EmptyState;