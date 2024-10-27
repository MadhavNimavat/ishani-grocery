import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Categories from "../assets/vectors/Categories.svg?react";
import Customer from "../assets/vectors/Customer.svg?react";
import Home from "../assets/vectors/Home.svg?react";
import LogOut from "../assets/vectors/LogOut.svg?react";
import Products from "../assets/vectors/Products.svg?react";
import Reports from "../assets/vectors/Reports.svg?react";
import Rider from "../assets/vectors/Rider.svg?react";
import Setting from "../assets/vectors/Setting.svg?react";
import Variants from "../assets/vectors/Variants.svg?react";
import Vendors from "../assets/vectors/Vendors.svg?react";
import Logo from "../assets/vectors/appLogo.svg?react";
import { clearUserAccess } from "../features";
import SideMenuItem from "./SideMenuItem";
import { useNavigate } from "react-router-dom";

const leftMenu = [
  { title: "Home", id: 1, path: "home" },
  { title: "Categories", id: 2, path: "categories" },
  { title: "Products", id: 3, path: "products" },
  { title: "Variants", id: 4, path: "variants" },
  { title: "Customer", id: 5, path: "customers" },
  { title: "Vendors", id: 6, path: "vendors" },
  { title: "Riders", id: 7, path: "riders" },
  { title: "Reports", id: 8, path: "reports" },
  { title: "Settings", id: 9, path: "settings" },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);

  const onSelectTab = useCallback(
    (tab) => {
      setActiveTab(tab.id);
      navigate(tab.path);
    },
    [navigate]
  );

  const renderIcon = (icon, isActive) => {
    const iconObj = {
      Home: (
        <Home
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Categories: (
        <Categories
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Products: (
        <Products
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Variants: (
        <Variants
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Customer: (
        <Customer
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Vendors: (
        <Vendors
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Riders: (
        <Rider
          className={`${
            isActive ? "stroke-white" : "stroke-primary"
          } fill-none`}
        />
      ),
      Reports: (
        <Reports className={`${isActive ? "fill-white" : "fill-primary"}`} />
      ),
      Settings: (
        <Setting className={`${isActive ? "fill-white" : "fill-primary"}`} />
      ),
    };
    return iconObj[icon] || <div />;
  };

  return (
    <div className="w-20 bg-background-variantTwo h-screen py-5 flex flex-col items-center">
      {/* sidebar content */}
      <div className="h-10 w-10 items-center justify-center flex">
        <Logo />
      </div>
      <div className="my-2" />
      <div className="flex-1 flex flex-col items-center overflow-y-auto overflow-x-auto">
        {leftMenu?.map((el, li) => {
          const isActive = activeTab === el.id;
          return (
            <SideMenuItem
              key={li}
              icon={renderIcon(el.title, isActive)}
              isActive={isActive}
              title={el.title}
              onSelectTab={() => onSelectTab(el)}
              customClass={"mb-4"}
            />
          );
        })}
      </div>
      <SideMenuItem
        icon={<LogOut className={"fill-white"} />}
        isActive={false}
        onSelectTab={() => dispatch(clearUserAccess())}
      />
    </div>
  );
};

export default Sidebar;
