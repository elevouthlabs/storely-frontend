import { Link } from "react-router-dom";
import DashboardIcon from "../../assets/Dashboard.svg";
import Orders from "../../assets/Dashboard.svg";
import Product from "../../assets/Product.svg";
import Service from "../../assets/Services.svg";
import Inventory from "../../assets/Dashboard.svg";
import Customers from "../../assets/Customers.svg";
import Payments from "../../assets/Payments.svg";
import Analytics from "../../assets/Analytics.svg";
import Settings from "../../assets/Settings.svg";
import elegant from "../../assets/Elegant.png";

const DashboardSidebar = () => {
  const SidebarLinks = [
    {
      id: 1,
      name: "Dashboard",
      icon: DashboardIcon,
      link: "/dashboard",
    },
    { id: 2, name: "Orders", icon: Orders, link: "/order" },
    { id: 3, name: "Products", icon: Product, link: "/products" },
    { id: 4, name: "Services", icon: Service, link: "/services" },
    { id: 5, name: "Inventory", icon: Inventory, link: "/inventory" },
    { id: 6, name: "Customers", icon: Customers, link: "/customers" },
    { id: 7, name: "Payments", icon: Payments, link: "/payments" },
    { id: 8, name: "Analytics", icon: Analytics, link: "/analytics" },
    { id: 9, name: "Settings", icon: Settings, link: "/setiings" },
  ];

  return (
    <div>
      <div className="h-[72px] py-6 px-8 border-b border-b-[#B3B3B33D] font-Inter">
        <img src={elegant} alt="elegant" className="w-[163px] h-[25px]" />
      </div>
      {/* Side bar Links */}
      <div className="px-[26px] mt-[58px] flex flex-col gap-1 text-[16px]">
        {SidebarLinks.map(({ id, name, icon, link }) => (
          <Link
            to={link}
            key={id}
            className="bg-[#8A2BE2] flex gap-3 items-center rounded-[10px] p-3"
          >
            <img src={icon} alt="" className="w-5 h-5" />
            <p className="text-white">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
