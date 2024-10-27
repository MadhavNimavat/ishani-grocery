const SideMenuItem = ({ onSelectTab, isActive, icon, title, customClass }) => {
  return (
    <div
      onClick={onSelectTab}
      className={`${customClass} flex flex-col items-center justify-center cursor-pointer`}
    >
      <div
        className={`${
          isActive ? "bg-primary" : "bg-transparent"
        } rounded-lg h-12 w-12 flex items-center justify-center drop-shadow-lg`}
      >
        {icon}
      </div>
      <div className={"text-xs text-white text-center"}>{title ?? ""}</div>
    </div>
  );
};

export default SideMenuItem;
